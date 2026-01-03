import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist', // Ausgabeordner für den Build
  },
  plugins: [vue()],
});
