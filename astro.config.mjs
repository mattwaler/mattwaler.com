import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

const excludedPages = [
  'https://mattwaler.com/dad',
  'https://mattwaler.com/klaus',
];

const normalize = (url) => url.replace(/\/$/, '');

export default defineConfig({
  site: 'https://mattwaler.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !excludedPages.includes(normalize(page)),
    }),
  ],
})
