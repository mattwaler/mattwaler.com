import type { CollectionEntry } from 'astro:content'
import { projectImageUrl } from './projects.js'

export type SchemaNode = Record<string, unknown>
export type Breadcrumb = { name: string; url: string }

export const SITE = 'https://mattwaler.com'
export const PERSON_ID = `${SITE}/#person`
export const WEBSITE_ID = `${SITE}/#website`
export const BLOG_ID = `${SITE}/blog#blog`

export const personRef = { '@id': PERSON_ID }
export const websiteRef = { '@id': WEBSITE_ID }
export const blogRef = { '@id': BLOG_ID }

export const trendyMinds = {
  '@type': 'Organization',
  name: 'TrendyMinds',
  url: 'https://trendyminds.com',
}

export const person: SchemaNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Matt Waler',
  url: SITE,
  jobTitle: 'Web & iOS Developer',
  worksFor: trendyMinds,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Web Development',
    'iOS Development',
    'Laravel',
    'Statamic',
    'Craft CMS',
    'Astro',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Alpine.js',
    'Swift',
    'SwiftUI',
    'React Native',
  ],
  sameAs: [
    'https://github.com/mattwaler',
    'https://instagram.com/mattwaler',
    'https://linkedin.com/in/mattwaler',
  ],
}

export const website: SchemaNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'mattwaler.com',
  url: SITE,
  description: 'The personal website of Matt Waler, a web and iOS developer based in Ohio.',
  inLanguage: 'en-US',
  publisher: personRef,
}

export const blog: SchemaNode = {
  '@type': 'Blog',
  '@id': BLOG_ID,
  name: "Matt Waler's Blog",
  description: 'Coding tips, tech rants, coffee-fueled tutorials, and the occasional meme.',
  url: `${SITE}/blog`,
  inLanguage: 'en-US',
  author: personRef,
  publisher: personRef,
  isPartOf: websiteRef,
}

export const breadcrumbList = (crumbs: Breadcrumb[]): SchemaNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
})

export const blogCrumb: Breadcrumb = { name: 'Blog', url: `${SITE}/blog` }
export const projectsCrumb: Breadcrumb = { name: 'Projects', url: `${SITE}/projects` }

export const postUrl = (post: CollectionEntry<'blog'>) => `${SITE}/blog/${post.id}`
export const postId = (post: CollectionEntry<'blog'>) => `${postUrl(post)}#article`

/** Compact BlogPosting used when listing posts on index pages. */
export const postSummary = (post: CollectionEntry<'blog'>): SchemaNode => ({
  '@type': 'BlogPosting',
  '@id': postId(post),
  headline: post.data.title,
  description: post.data.description,
  url: postUrl(post),
  datePublished: post.data.date.toISOString(),
  author: personRef,
})

type Project = {
  title: string
  description: string
  link: string
  tools: string[]
  trendy?: boolean
  category?: string
}

/** Typed CreativeWork for a project: iOS apps vs. websites. */
export const projectItem = (project: Project): SchemaNode => {
  const isApp = project.tools.includes('Swift')
  const credit = project.trendy
    ? { contributor: personRef, producer: trendyMinds }
    : { author: personRef }

  return {
    '@type': isApp ? 'MobileApplication' : 'WebSite',
    name: project.title,
    description: project.description,
    url: project.link,
    image: projectImageUrl(project),
    keywords: project.tools,
    ...(isApp && { operatingSystem: 'iOS' }),
    ...(project.category && { applicationCategory: project.category }),
    ...credit,
  }
}

export const itemList = (items: SchemaNode[]): SchemaNode => ({
  '@type': 'ItemList',
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item,
  })),
})
