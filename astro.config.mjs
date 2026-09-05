import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

const excludedPages = [
  'https://mattwaler.com/dad/',
  'https://mattwaler.com/klaus/',
];

export default defineConfig({
  site: 'https://mattwaler.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !excludedPages.includes(page),
    }),
  ],
})
