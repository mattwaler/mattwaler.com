import Hero from 'components/Hero'
import Page from 'components/Page'
import Link from 'next/link'
import path from 'path'
import glob from 'fast-glob'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import { sort } from 'fast-sort'

export const getStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'src/posts')
  const postPaths = await glob(`${folderPath}/**/*.mdx`)

  const postsMatter = await Promise.all(postPaths.map(async (post) => {
    const rawFileSource = await fs.readFile(post)
    const { data } = await matter(rawFileSource)
    return {
      ...data,
      slug: post.replaceAll(process.cwd(), '').replaceAll('/src/posts/', '').replaceAll('.mdx', ''),
    }
  }))

  const sortedPosts = await sort(postsMatter).desc(u => new Date(u.date))
  const serializablePosts = JSON.parse(JSON.stringify(sortedPosts))

  return {
    props: {
      posts: serializablePosts
    },
  }
}

const heroProps = {
  heading: 'My thoughts, tips, and tricks on modern web development.',
  paragraph: 'This goes without saying, but these thoughts are subject to change at any point.',
}

const seo = {
  title: 'Blog',
  description: heroProps.paragraph,
}

export default function Work({ posts }) {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <div className="container section-spacing">
        <ul className="mt-8 flex flex-col gap-24">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-wrap gap-4">
              <div className="w-full sm:w-48">{post.date}</div>
              <div className="w-full sm:w-auto sm:flex-1">
                <Link href={`/blog/${post.slug}`}>
                  <a className="font-bold text-xl">{post.title}</a>
                </Link>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="mt-4 inline-block bg-gray-200 rounded px-4 py-2">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Page>
  )
}
