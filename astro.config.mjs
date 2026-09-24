// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site: https://sauravanand542.github.io (repository sauravanand542.github.io).
// base '/' because GitHub Pages serves a user site at the domain root.
export default defineConfig({
  site: 'https://sauravanand542.github.io',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
