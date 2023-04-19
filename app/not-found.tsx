import Hero from 'components/Hero'
import ContactCTA from 'components/ContactCTA'

export const metadata = {
  title: 'Page Not Found',
  description: 'No page found. Please try again.',
}

export default function Home() {
  return (
    <>
      <Hero
        heading='You look lost.'
        paragraph="Looks like you attempted to visit a page that does not exist. Let's get you back on track."
      />
      <ContactCTA />
    </>
  )
}
