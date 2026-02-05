import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
// Define routes to capture. First one must be root.
const ROUTES = [
    { path: '/', file: 'index.html' },
    { path: '/chess-coaching', file: 'chess-coaching/index.html', selector: 'a[href*="chess-coaching"]' }
];
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}/salvador/`;

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

    // 2. Navigate to other routes
    for (const route of ROUTES) {
        if (route.path === '/') continue; // Already there

        console.log(`🧭 Navigating to ${route.path}...`);

        try {
            // Find link and click
            const linkFound = await page.evaluate((selector) => {
                const el = document.querySelector(selector);
                if (el) {
                    el.click();
                    return true;
                }
                return false;
            }, route.selector);

            if (!linkFound) {
                console.error(`⚠️ Link not found for ${route.path} using selector ${route.selector}`);
                continue;
            }

            // Wait for navigation/render
            await new Promise(r => setTimeout(r, 1000));

            // Save Page
            await savePage(page, route.file);

            // Optional: Navigate back if needed, but for linear list simpler to just go to next or reload root? 
            // For simple site, we can just click "Home" or reload root.
            // Let's reload root to be safe for next iteration
            await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

        } catch (error) {
            console.error(`❌ Error processing ${route.path}:`, error);
        }
    }

    await browser.close();
    serverProcess.kill();
    console.log('✨ Prerendering complete!');
    process.exit(0);
}

async function savePage(page, relativePath) {
    const content = await page.content();
    const filePath = path.join(DIST_DIR, relativePath);
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`💾 Saved ${filePath}`);
}

prerender();
