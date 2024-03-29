import tripp from 'assets/tripp.jpg'
import Hero from 'components/Hero'
import ContactCTA from 'components/ContactCTA'
import Skills from 'app/_skills'
import About from 'app/_about'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com'
  },
  title:
    'Matt Waler is a Senior JavaScript Developer, Tennis player, and avid Weightlifter.',
  description:
    'I am a JavaScript-focused developer from Ohio. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading="I build applications with modern tools and technologies."
        paragraph={metadata.description}
        image={tripp}
      />
      <About />
      <Skills />
      <ContactCTA />
    </>
  )
}
