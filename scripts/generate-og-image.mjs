// Generates the 1200x630 social preview card into public/social-preview.jpg.
//   npm run og:generate
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'social-preview.jpg');

// Colors mirror tailwind.config.js (secondary ink, accent sand, highlight slate).
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1F2933"/>
      <stop offset="100%" stop-color="#243141"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="12" height="630" fill="#B08968"/>
  <text x="80" y="250" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="700" fill="#F5F5F4">Timo Achtelik</text>
  <text x="80" y="330" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="600" fill="#B08968">Lead Software Engineer</text>
  <text x="80" y="430" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="400" fill="#CBD2D9">Angular  ·  Vue.js  ·  TypeScript  ·  Node.js</text>
  <text x="80" y="560" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="400" fill="#8895A7">profile.timo-achtelik.de</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(out);
console.log('wrote', out);
