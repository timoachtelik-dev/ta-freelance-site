import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  build: {
    outDir: 'dist', // Ausgabeordner für den Build
  },
  plugins: [vue()],
});

