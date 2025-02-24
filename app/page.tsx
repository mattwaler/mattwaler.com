import Hero from 'components/Hero'
import ContactCTA from 'components/ContactCTA'
import Skills from 'app/_skills'
import About from 'app/_about'
import fam from 'assets/fam.webp'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com'
  },
  title:
    'Matt Waler builds websites and mobile applications with JavaScript and Swift.',
  description:
    'My name is Matt Waler, and I am a senior developer from Ohio. I have been been writing frontend code for 10 years and have helped design and deploy hundreds of websites for my clients.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading={`I build websites and applications with JavaScript and Swift.`}
        paragraph={metadata.description}
        image={fam}
      />
      <About />
      <Skills />
      <ContactCTA />
    </>
  )
}
