import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'
import Page from 'components/Page'

const heroProps = {
  heading: 'Take a gander at some of projects I have worked on.',
  paragraph:
    'I have built a lot of websites since I got started in 2016. Listed below is a non-exhaustive representation of the web applications I have helped develop and deploy.',
}

const seo = {
  title: 'Work',
  description: heroProps.paragraph,
}

export default function Work() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <WorkListing />
    </Page>
  )
}
