export const dynamic = 'force-static'

export default async function sitemap() {
  const slugs = [
    '',
    '/contact',
    '/apps',
    '/apps/agone',
    '/websites'
  ]
  const pages = slugs.map((page) => ({
    url: `https://mattwaler.com${page}`,
    lastModified: new Date().toISOString(),
  }))
  return pages
}
