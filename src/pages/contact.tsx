import Hero from "components/Hero"
import ContactForm from "sections/ContactForm"
import Page from "components/Page"

const seo = {
  title: "Contact",
  description: "Get in contact with Matt Waler.",
}

const heroProps = {
  heading: "Let's get in touch.",
  paragraph: "Fill out the contact form below and I promise I will reach out as fast as I can.",
}

export default function Contact() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <ContactForm />
    </Page>
  )
}
