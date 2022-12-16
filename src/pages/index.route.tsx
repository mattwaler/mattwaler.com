import Hero from 'components/Hero'
import Skills from 'pages/index/views/Skills'
import ContactCTA from 'components/Contact'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Page from 'components/Page'
import About from 'pages/index/views/About'
import tripp from 'pages/index/assets/tripp.jpg'

const seo = {
  title: 'Matt Waler is a Senior JavaScript Developer, Tennis player, and avid Weightlifter.',
  description: "I am a JavaScript-focused developer from Ohio. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.",
}

const heroProps = {
  heading: 'I build applications with modern tools and technologies.',
  paragraph: seo.description,
  image: tripp,
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
