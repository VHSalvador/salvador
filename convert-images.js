import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'img');

console.log(`Scanning directory: ${imgDir}`);

// Define target sizes
const SIZES = [
    { suffix: '', width: null }, // Original size (but optimized)
    { suffix: '-medium', width: 800 },
    { suffix: '-small', width: 400 }
];

fs.readdir(imgDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
            const inputFile = path.join(imgDir, file);
            const filenameNoExt = path.basename(file, ext);

            SIZES.forEach(size => {
                const outputFile = path.join(imgDir, `${filenameNoExt}${size.suffix}.webp`);

                // Skip if output file is same as input file (unlikely given different extension, but good practice)
                if (inputFile === outputFile) return;

                console.log(`Converting ${file} to ${path.basename(outputFile)} (width: ${size.width || 'original'})...`);

                let transform = sharp(inputFile);

                if (size.width) {
                    transform = transform.resize({ width: size.width });
                }

                transform
                    .webp({ quality: 80 })
                    .toFile(outputFile)
                    .then(info => {
                        console.log(`✅ Generated ${path.basename(outputFile)}`);
                    })
                    .catch(err => {
                        console.error(`❌ Error converting ${file}: `, err);
                    });
            });
        }
    });
});
