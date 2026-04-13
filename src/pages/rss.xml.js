import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog')
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return rss({
    title: "Matt Waler's Blog",
    description: "Coding tips, tech rants, coffee-fueled tutorials, and the occasional meme.",
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  })
}
