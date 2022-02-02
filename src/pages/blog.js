import Hero from 'components/Hero'
import Page from 'components/Page'
import Link from 'next/link'
import getPosts from 'utils/getPosts'

const posts = getPosts()

const heroProps = {
  heading: 'My thoughts, tips, and tricks on modern web development.',
  paragraph: 'This goes without saying, but these thoughts are subject to change at any point.',
}

const seo = {
  title: 'Blog',
  description: heroProps.paragraph,
}

export default function Work() {
  console.log(posts)

  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <div className="container section-spacing">
        <ul className="mt-8 flex flex-col gap-24">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-wrap gap-4">
              <div className="w-full sm:w-48">{post.module.meta.date}</div>
              <div className="w-full sm:w-auto sm:flex-1">
                <Link href={post.slug}>
                  <a className="font-bold text-xl">{post.module.meta.title}</a>
                </Link>
                <p>{post.module.meta.description}</p>
                <Link href={post.slug}>
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
