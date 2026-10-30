import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog')
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  // Feed readers resolve links against the feed, not the post, so root-relative URLs become absolute
  const absolute = (html) => html.replace(/(href|src)="\//g, `$1="${new URL('/', context.site)}`)

  return rss({
    title: "Matt Waler's Blog",
    description: "Coding tips, tech rants, coffee-fueled tutorials, and the occasional meme.",
    site: context.site,
    trailingSlash: false,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    items: sorted.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
      // The same HTML the post page renders, so feeds and answer engines get the whole post
      content: absolute(post.rendered?.html ?? ''),
      categories: post.data.tags,
      // RSS's own <author> wants an email address, so name the author through Dublin Core instead
      customData: '<dc:creator>Matt Waler</dc:creator>',
    })),
  })
}
