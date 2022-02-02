import Page from 'components/Page'
import Hero from 'components/Hero'
import CodeblockCTA from 'sections/ContactCTA'

const seo = {
  title: 'Page Not Found',
  description: 'No page found. Please try again.',
}

const heroProps = {
  heading: 'You look lost...',
  paragraph: "Looks like you attempted to visit a page that does not exist. Let's get you back on track.",
}

export default function Custom404() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </Page>
  )
}
