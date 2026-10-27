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

// Filtered views of /projects and /blog are noindexed, so keep them out of the sitemap too.
const excludedPrefixes = [
  'https://mattwaler.com/projects/tools/',
  'https://mattwaler.com/blog/tags/',
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
      filter: (page) =>
        !excludedPages.includes(normalize(page)) &&
        !excludedPrefixes.some((prefix) => page.startsWith(prefix)),
    }),
  ],
})
