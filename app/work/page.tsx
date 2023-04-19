import Hero from 'components/Hero'
import Listing from 'app/work/__listing'
import Contact from 'components/ContactCTA'

const heroProps = {
  heading: 'Take a gander at some of projects I have worked on.',
  paragraph:
    'I have built a lot of applications since I got started in 2016. Listed below is a non-exhaustive representation of what I have developed and deployed recently.',
}

export const metadata = {
  title: heroProps.heading.replace('.', ''),
  description: heroProps.paragraph,
}

export default function Work() {
  return (
    <>
      <Hero {...heroProps} />
      <Listing />
      <Contact />
    </>
  )
}
