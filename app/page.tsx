import tripp from 'assets/tripp.webp'
import Hero from 'components/Hero'
import ContactCTA from 'components/ContactCTA'
import Skills from 'app/_skills'
import About from 'app/_about'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com'
  },
  title:
    'Matt Waler builds websites and mobile applications with JavaScript and Swift.',
  description:
    'My name is Matt Waler, and I am a developer from Ohio specializing in JavaScript and Swift. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading={`I build websites and applications with JavaScript and Swift.`}
        paragraph={metadata.description}
        image={tripp}
      />
      <About />
      <Skills />
      <ContactCTA />
    </>
  )
}
