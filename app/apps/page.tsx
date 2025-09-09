import Hero from 'components/Hero'
import Listing from './_listing'
import Contact from 'components/ContactCTA'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/apps'
  },
  title: 'Matt Waler creates simple and powerful applications for any Apple Device',
  description:
    'I have recently started dipping my toes into Swift and iOS applications. Take a look at what I have completed so far.',
}

export default function Work() {
  return (
    <>
      <Hero
        heading={`I create simple and powerful applications for any Apple Device.`}
        paragraph={metadata.description}
      />
      <Listing />
      <Contact />
    </>
  )
}
