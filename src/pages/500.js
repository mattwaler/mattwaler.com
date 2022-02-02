import Hero from 'components/Hero'
import CodeblockCTA from 'sections/ContactCTA'
import Page from 'components/Page'

const seo = {
  title: 'Something went wrong',
  description: 'Something went wrong on the server. Please try again.',
}

const heroProps = {
  heading: 'Something went wrong.',
  paragraph: 'Something went wrong on the server. Please try again or visit another page.',
}

export default function Custom500() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </Page>
  )
}
