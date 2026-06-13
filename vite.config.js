import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist', // Ausgabeordner für den Build
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Keep the framework in a long-lived vendor chunk so the app
          // entry bundle stays small and caches independently.
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  plugins: [vue()],
});
