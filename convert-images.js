import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'img');

console.log(`Scanning directory: ${imgDir}`);

fs.readdir(imgDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
            const inputFile = path.join(imgDir, file);
            const outputFile = path.join(imgDir, path.basename(file, ext) + '.webp');

            console.log(`Converting ${file} to ${path.basename(outputFile)}...`);

            sharp(inputFile)
                .toFile(outputFile)
                .then(info => {
                    console.log(`Successfully converted ${file} to WebP.`);
                })
                .catch(err => {
                    console.error(`Error converting ${file}: `, err);
                });
        }
    });
});
