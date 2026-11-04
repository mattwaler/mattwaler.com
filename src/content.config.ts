import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { easternDate } from './data/dates'

// Written as Eastern time with no offset: `2026-11-04 14:15`, or a bare day for noon
const postDate = z.preprocess(easternDate, z.coerce.date())

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: postDate,
    updated: postDate.optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { blog }
