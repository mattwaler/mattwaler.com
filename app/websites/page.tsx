import Hero from 'components/Hero'
import Listing from './_listing'
import Contact from 'components/ContactCTA'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/websites'
  },
  title: 'Take a gander at some of websites I have worked on',
  description:
    'I have built a lot of websites since I got started in 2016. Listed below is a non-exhaustive representation of what I have developed and deployed recently.',
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
