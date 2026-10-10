import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { satteri } from '@astrojs/markdown-satteri'
import postTweaks from './src/plugins/hast-post-tweaks.mjs'

const site = 'https://mattwaler.com'

const excludedPages = [
  'https://mattwaler.com/dad',
  'https://mattwaler.com/klaus',
];

const normalize = (url) => url.replace(/\/$/, '');

export default defineConfig({
  site,
  trailingSlash: 'never',
  markdown: {
    processor: satteri({ hastPlugins: [postTweaks({ site })] }),
  },
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
