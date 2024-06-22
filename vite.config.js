import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        app: 'weather.js'  
      }
    }
  }
});
