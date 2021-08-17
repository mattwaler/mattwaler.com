import Hero from 'sections/HomeHero'
import Layout from 'components/Layout'
import Skills from 'sections/Skills'
import ContactCTA from 'sections/ContactCTA'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Home: NextPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('contact')) {
      toast.success('Thanks for reaching out!')
    }
  }, [])

  return (
    <Layout
      meta={{
        title: 'Home',
        description:
          'Matt Waler is a web developer from Broadview Heights, Ohio.',
      }}
    >
      <Hero />
      <Skills />
      <ContactCTA />
    </Layout>
  )
}

export default Home
