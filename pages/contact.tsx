import Hero from 'components/Hero'
import ContactForm from 'sections/ContactForm'

const heroProps = {
  heading: "Let's get in touch.",
  paragraph: "Fill out the contact form below and I promise I will reach out as fast as I can. Thank you in advance for contacting me!",
}

const Contact: Page = () => {
  return (
    <>
      <Hero {...heroProps} />
      <ContactForm />
    </>
  )
}

Contact.meta = {
  title: 'Contact',
  description: 'Get in contact with Matt Waler.',
}

export default Contact
