import type { CollectionEntry } from 'astro:content'

export const slugifyTag = (tag: string) =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
  const map = new Map<string, string>()
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      map.set(slugifyTag(tag), tag)
    }
  }
  return [...map.entries()]
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
