// Copies the self-hosted Inter woff2 files from @fontsource/inter into
// public/fonts/. Run after changing the font weights used by the site:
//   npm run fonts:sync
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'node_modules', '@fontsource', 'inter', 'files');
const outDir = join(root, 'public', 'fonts');

const weights = [400, 500, 600, 700];
const subsets = ['latin', 'latin-ext'];

mkdirSync(outDir, { recursive: true });
for (const subset of subsets) {
  for (const weight of weights) {
    const file = `inter-${subset}-${weight}-normal.woff2`;
    copyFileSync(join(srcDir, file), join(outDir, file));
    console.log(`copied ${file}`);
  }
}
