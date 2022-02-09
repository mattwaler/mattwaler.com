import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Post from 'components/Post'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import path from 'path'
import glob from 'fast-glob'
import Codeblock from 'components/Codeblock'

const components = {
  pre: (props) => <Codeblock {...props} />,
}

export default function PostPage({ source, data }) {
  return (
    <Post title={data.title} description={data.description}>
      <MDXRemote {...source} components={components} />
    </Post>
  )
}

export const getStaticPaths = async () => {
  const folderPath = path.join(process.cwd(), 'src/posts')
  const posts = await glob(`${folderPath}/**/*.mdx`)
  const formattedPosts = posts.map((post) =>
    post.replaceAll(process.cwd(), '').replaceAll('/src/posts/', '').replaceAll('.mdx', '')
  )
  return {
    paths: formattedPosts.map((post) => ({
      params: { post: post },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'src/posts')
  const filePath = path.join(folderPath, `${props.params.post}.mdx`)
  const rawFileSource = await fs.readFile(filePath)
  const { content, data } = matter(rawFileSource)
  return {
    props: {
      source: await serialize(content, { mdxOptions: { remarkPlugins: [require('remark-prism')] } }),
      data,
    },
  }
}
