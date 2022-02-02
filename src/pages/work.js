import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'
import Page from 'components/Page'

const heroProps = {
  heading: 'Take a gander at some of projects I have worked on.',
  paragraph: 'A non-comprehensive list of the most recent web applications I have helped develop and deploy.',
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
