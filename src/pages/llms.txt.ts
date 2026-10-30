import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE, person } from '../data/schema'

// A plain-text map of the site for language models (https://llmstxt.org), rebuilt with every post
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  const link = (title: string, path: string, note: string) => `- [${title}](${SITE}${path}): ${note}`

  const body = [
    '# Matt Waler',
    '',
    `> ${person.description}`,
    '',
    '## Blog posts',
    '',
    ...posts.map(post => link(post.data.title, `/blog/${post.id}`, post.data.description)),
    '',
    '## iPhone apps',
    '',
    link('Repeaters', '/repeaters', 'A free iOS app for recurring tasks and chores, with reminders and completion history.'),
    link('Intervals', '/intervals', 'A free, no-fuss interval timer for workouts.'),
    '',
    '## Work',
    '',
    link('Projects', '/projects', 'Websites and iOS apps Matt has built since 2016.'),
    link('Freelance web development', '/freelance-web-development', 'Fixed-price CMS-based and static websites.'),
    link('Freelance mobile app development', '/freelance-mobile-application-development', 'Fixed-price native iOS and cross-platform apps.'),
    link('Contact', '/contact', 'Get in touch about a project.'),
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
