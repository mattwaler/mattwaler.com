import Hero from 'components/Hero'
import Skills from 'blocks/HomeSkills'
import ContactCTA from 'blocks/ContactCTA'
import Page from 'components/Page'
import About from 'blocks/HomeAbout'
import tripp from 'assets/tripp.jpg'

const seo = {
  title: 'Matt Waler is a Senior JavaScript Developer, Tennis player, and avid Weightlifter.',
  description: "I am a JavaScript-focused developer from Ohio. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.",
}

const heroProps = {
  heading: 'I build applications with modern tools and technologies.',
  paragraph: seo.description,
  image: tripp,
}

export default function Home() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <About />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
