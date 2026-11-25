/**
 * Vite configuration for SOHAR SAND INTERNATIONAL TRADING website.
 * Process: enable React plugin, set project root, and define build output.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
