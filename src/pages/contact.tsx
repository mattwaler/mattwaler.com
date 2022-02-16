import Hero from 'components/Hero'
import ContactForm from 'sections/ContactForm'
import Page from 'components/Page'

const seo = {
  title: 'Contact',
  description: 'Get in contact with Matt Waler.',
}

const heroProps = {
  heading: "Let's get in touch.",
  paragraph:
    'Thank you for taking the time to poke around my site. If you are interested in connecting, fill out the contact form below. I will do my best to respond within 24 hours, but no guarantees!',
}

export default function Contact() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <div className="grid items-center grid-cols-1 container section-spacing md:gap-16 md:grid-cols-2 lg:gap-32">
        <ContactForm />
        <img className="hidden md:block" src="/assets/contact.svg" alt="Contact form illustration." />
      </div>
    </Page>
  )
}
