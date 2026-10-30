import { defineConfig, fontProviders } from 'astro/config'
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
  // Self-hosted with a metric-matched fallback, so text never waits on Google Fonts
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Outfit',
    cssVariable: '--font-outfit',
    weights: ['400 900'],
    subsets: ['latin'],
    fallbacks: ['sans-serif'],
  }],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !excludedPages.includes(normalize(page)),
    }),
  ],
})
