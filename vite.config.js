import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  base: './',
  build: {
    rollupOptions: {
      outDir: path.resolve(__dirname, 'dist'),
      input: {
        index: 'index.html',
        settings: 'settings.html',
      },
    },
  },
});