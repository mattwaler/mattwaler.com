function importAll(r) {
  return r
    .keys()
    .filter((filename) => filename.startsWith('.'))
    .map((filename) => ({
      slug: `/blog/${filename.replaceAll('./', '').replaceAll('.mdx', '')}`,
      filename,
      module: r(filename),
    }))
    .filter(({ slug }) => !slug.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getPosts() {
  return importAll(require.context('../pages/blog', true, /\.mdx$/))
}
