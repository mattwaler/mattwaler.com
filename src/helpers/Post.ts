export interface Post {
  url: string
  frontmatter: {
    title: string
    description: string
    date: string
  }
}

export function sortPosts(posts: Post[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}
