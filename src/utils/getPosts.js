import { sort } from 'fast-sort'

export default function getPosts() {
  const postContext = require.context('../pages/blog', true, /\.mdx$/)
  const list = postContext
    .keys()
    .filter((filename) => filename.startsWith('.'))
    .map((filename) => ({
      slug: `/blog/${filename.replaceAll('./', '').replaceAll('.mdx', '')}`,
      filename,
      module: postContext(filename),
    }))
    .filter(({ slug }) => !slug.includes('/snippets/'))
    .filter((p) => p.module.meta.private !== true)

  return sort(list).desc(u => u.module.meta.date)
}
