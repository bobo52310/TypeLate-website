// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your production domain when ready
  site: 'https://typelate.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});