import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'src/shared'),
      stores: path.resolve(__dirname, 'src/stores'),
      pages: path.resolve(__dirname, 'src/pages')
    }
  }
});
