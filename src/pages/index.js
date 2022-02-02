import Hero from 'components/Hero'
import Skills from 'sections/Skills'
import ContactCTA from 'sections/ContactCTA'
import Page from 'components/Page'

const seo = {
  title: 'Home',
  description: 'Matt Waler is a web developer from Broadview Heights, Ohio.',
}

const heroProps = {
  heading: (
    <>
      <span className="md:block">I make awesome websites</span>
      <span className="ml-2 text-indigo-200 md:ml-0 md:block">in exchange for cold-hard cash.</span>
    </>
  ),
  paragraph: 'I also love Tennis, Chipotle, and spending time with family.',
}

export default function Home() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
