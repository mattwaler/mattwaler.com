import Hero from 'components/Hero'
import Listing from 'app/work/_listing'
import Contact from 'components/ContactCTA'

export const metadata = {
  alternates: {
    canonical: '/work'
  },
  title: 'Take a gander at some of projects I have worked on',
  description:
    'I have built a lot of applications since I got started in 2016. Listed below is a non-exhaustive representation of what I have developed and deployed recently.',
}

export default function Work() {
  return (
    <>
      <Hero heading={`${metadata.title}.`} paragraph={metadata.description} />
      <Listing />
      <Contact />
    </>
  )
}
