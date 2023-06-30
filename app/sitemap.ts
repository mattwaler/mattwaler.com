export default async function sitemap() {
  const slugs = ['', '/contact', '/instruction', '/work']
  const pages = slugs.map((page) => ({
    url: `https://mattwaler.com${page}`,
    lastModified: new Date().toISOString(),
  }))
  return pages
}
