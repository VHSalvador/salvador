/* global process, __dirname */
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const ROUTES = [
    { path: '/', file: 'index.html' },
];
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}${process.env.VITE_BASE_PATH ?? '/'}`;

async function prerender() {
    console.log('🚀 Starting Prerendering (Crawling Mode)...');

    const serverProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'preview'], {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        shell: true
    });

    console.log('⏳ Waiting for server to start...');
    await new Promise((resolve) => {
        serverProcess.stdout.on('data', (data) => {
            if (data.toString().includes('Local:')) resolve();
        });
        setTimeout(resolve, 5000);
    });

    console.log('✅ Server started. Launching Puppeteer...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // 1. Visit Root
    console.log(`📷 Visiting Root: ${BASE_URL}`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000)); // Hydration wait

    // Save Root
    await savePage(page, 'index.html');

    await browser.close();
    serverProcess.kill();
    console.log('✨ Prerendering complete!');
    process.exit(0);
}

async function savePage(page, relativePath) {
    let content = await page.content();

    // Inline Critical CSS
    // Regex to find the main stylesheet link. It typically looks like: <link rel="stylesheet" crossorigin="" href="/salvador/assets/index-BuLEJhDe.css">
    const cssMatch = content.match(/<link\s+rel="stylesheet"\s+[^>]*href="([^"]+)"[^>]*>/);
    if (cssMatch) {
        const cssHref = cssMatch[1]; // e.g., /salvador/assets/index-BuLEJhDe.css
        const cssFileName = cssHref.split('/').pop();
        const cssFilePath = path.join(DIST_DIR, 'assets', cssFileName);

        if (fs.existsSync(cssFilePath)) {
            try {
                const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
                // Replace the link tag with the inline style
                content = content.replace(cssMatch[0], `<style>${cssContent}</style>`);
                console.log(`💉 Inlined CSS from ${cssFileName} into ${relativePath}`);
            } catch (err) {
                console.error(`⚠️ Failed to read CSS file for inlining: ${err.message}`);
            }
        } else {
            console.warn(`⚠️ Could not find CSS file to inline: ${cssFilePath}`);
        }
    }

    const filePath = path.join(DIST_DIR, relativePath);
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`💾 Saved ${filePath}`);
}

prerender();
