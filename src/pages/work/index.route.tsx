import Hero from 'components/Hero'
import Listing from 'pages/work/views/Listing'
import Page from 'components/Page'
import Contact from 'components/Contact'

const heroProps = {
  heading: 'Take a gander at some of projects I have worked on.',
  paragraph:
    'I have built a lot of applications since I got started in 2016. Listed below is a non-exhaustive representation of what I have developed and deployed recently.',
}

const seo = {
  title: heroProps.heading.replace('.', ''),
  description: heroProps.paragraph,
}

export default function Work() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <Listing />
      <Contact />
    </Page>
  )
}
