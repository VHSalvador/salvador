/* eslint-disable no-unused-vars */
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
                const webpOutputFile = path.join(imgDir, `${filenameNoExt}${size.suffix}.webp`);
                const avifOutputFile = path.join(imgDir, `${filenameNoExt}${size.suffix}.avif`);

                // Skip if output file is same as input file
                if (inputFile === webpOutputFile || inputFile === avifOutputFile) return;

                console.log(`Converting ${file} to WebP and AVIF (width: ${size.width || 'original'})...`);

                let transformWebp = sharp(inputFile);
                let transformAvif = sharp(inputFile);

                if (size.width) {
                    transformWebp = transformWebp.resize({ width: size.width });
                    transformAvif = transformAvif.resize({ width: size.width });
                }

                transformWebp
                    .webp({ quality: 80 })
                    .toFile(webpOutputFile)
                    .then(info => {
                        console.log(`✅ Generated ${path.basename(webpOutputFile)}`);
                    })
                    .catch(err => {
                        console.error(`❌ Error converting ${file} to WebP: `, err);
                    });

                transformAvif
                    .avif({ quality: 60 })
                    .toFile(avifOutputFile)
                    .then(info => {
                        console.log(`✅ Generated ${path.basename(avifOutputFile)}`);
                    })
                    .catch(err => {
                        console.error(`❌ Error converting ${file} to AVIF: `, err);
                    });
            });


        }
    });
});
