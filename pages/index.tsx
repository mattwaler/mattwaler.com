import Hero from "sections/HomeHero"
import Skills from "sections/Skills"
import ContactCTA from "sections/ContactCTA"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

const Home: Page = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has("contact")) {
      toast.success("Thanks for reaching out!")
    }
  }, [])
  return (
    <>
      <Hero />
      <Skills />
      <ContactCTA />
    </>
  )
}

Home.meta = {
  title: "Home",
  description: "Matt Waler is a web developer from Broadview Heights, Ohio.",
}

export default Home
