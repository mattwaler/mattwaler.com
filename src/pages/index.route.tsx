import Hero from 'components/Hero'
import Skills from 'pages/index/Skills'
import ContactCTA from 'components/Contact'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Page from 'components/Page'
import About from 'pages/index/About'

const seo = {
  title: 'Home',
  description: 'Matt Waler is a web developer from Broadview Heights, Ohio.',
}

const heroProps = {
  heading: 'I build websites with modern tools and technologies.',
  paragraph:
    "I am a frontend-focused developer from Ohio. I graduated from Ohio University in 2016 and I've been making websites ever since. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.",
  image: '/assets/tripp.jpg',
}

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('contact')) {
      toast.success('Thanks for reaching out!')
    }
  }, [])
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <About />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
