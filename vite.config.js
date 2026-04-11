/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Converts the Vite-injected <link rel="stylesheet"> to async (non-render-blocking).
// Uses the print/onload trick: browser downloads but does not block render; onload
// flips it to 'all' so styles apply as soon as they arrive.
const asyncCssPlugin = {
  name: 'async-css',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
      (_, href) =>
        `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
    );
  },
};

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react(), asyncCssPlugin],
  base: process.env.VITE_BASE_PATH ?? "/",
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          lucide: ['lucide-react']
        }
      }
    }
  }
}))
