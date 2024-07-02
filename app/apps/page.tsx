import Hero from 'components/Hero'
import Listing from './_listing'
import Contact from 'components/ContactCTA'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/apps'
  },
  title: 'I publish simple but powerful mobile applications for use on Apple Devices',
  description:
    'I have recently started dipping my toes into Swift and iOS applications. Take a look at what I have completed so far.',
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