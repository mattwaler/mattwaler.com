import { readdirSync, readFileSync } from 'node:fs'
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

// Each post's `updated ?? date` for the sitemap, read from frontmatter since content collections aren't available here
const postsDir = new URL('./src/content/blog/', import.meta.url)
const postLastmod = new Map(
  readdirSync(postsDir).filter(file => file.endsWith('.md')).map(file => {
    const frontmatter = readFileSync(new URL(file, postsDir), 'utf8').split('---')[1] ?? ''
    const field = name => frontmatter.match(new RegExp(`^${name}:\\s*(\\S+)`, 'm'))?.[1]
    return [`${site}/blog/${file.replace(/\.md$/, '')}`, field('updated') ?? field('date')]
  })
)

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
      serialize: (item) => {
        const lastmod = postLastmod.get(normalize(item.url))
        return lastmod ? { ...item, lastmod } : item
      },
    }),
  ],
})
