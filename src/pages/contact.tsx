import Hero from 'components/Hero'
import ContactForm from 'sections/ContactForm'
import Page from 'components/Page'
import Image from 'next/future/image'
import svg from 'assets/contact.svg'

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
        <Image
          alt="Contact form illustration."
          className="hidden md:block"
          loading="lazy"
          src={svg}
        />
      </div>
    </Page>
  )
}
