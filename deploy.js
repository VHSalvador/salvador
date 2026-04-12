import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function deploy() {
    const client = new ftp.Client();
    // This logs inside the console so you can see what it's doing
    client.ftp.verbose = true;
    
    const host = process.env.FTP_HOST;
    const user = process.env.FTP_USER;
    const password = process.env.FTP_PASSWORD;
    const remoteDir = process.env.FTP_REMOTE_DIR || "/";

    if (!host || !user || !password) {
        console.error("ERROR: Missing FTP credentials. Please fill in .env.local");
        process.exit(1);
    }

    try {
        console.log(`Connecting to ${host}...`);
        
        await client.access({
            host: host,
            user: user,
            password: password,
            secure: true,
            secureOptions: { rejectUnauthorized: false }
        });
        
        console.log(`Connected! Uploading contents of /dist folder to ${remoteDir}...`);
        const distPath = path.join(__dirname, "dist");
        await client.uploadFromDir(distPath, remoteDir);
        
        console.log(`\n✅ Deployment completed successfully!`);
    }
    catch(err) {
        console.error("Deployment failed:", err);
    }
    client.close();
}

deploy();
