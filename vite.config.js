import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub User Pages (https://<username>.github.io) are served from root '/'
  base: '/',
  build: {
    outDir: 'dist',
  },
});
