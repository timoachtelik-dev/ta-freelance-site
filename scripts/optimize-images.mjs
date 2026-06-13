// Generates the responsive portrait variants used by About.vue from the
// committed source image. Run after replacing src/assets/portrait.jpg:
//   npm run images:optimize
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const assets = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const source = join(assets, 'portrait.jpg');

// Displayed inside a 192px circle, so 384px covers 2x displays.
const width = 384;

await sharp(source).resize({ width }).avif({ quality: 60 }).toFile(join(assets, 'portrait-384.avif'));
await sharp(source).resize({ width }).webp({ quality: 80 }).toFile(join(assets, 'portrait-384.webp'));
await sharp(source).resize({ width }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(assets, 'portrait-384.jpg'));
console.log('portrait variants written to src/assets/');
