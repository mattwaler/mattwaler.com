import Hero from 'components/Hero'
import Form from 'app/contact/_form'
import Image from 'next/image'
import svg from 'assets/contact.svg'

const heroProps = {
  heading: "Let's get in touch.",
  paragraph:
  'Thank you for taking the time to poke around my site. If you are interested in connecting, fill out the contact form below. I will do my best to respond within 24 hours.',
}

export const metadata = {
  title: heroProps.heading.replace('.', ''),
  description: heroProps.paragraph,
}

export default function Contact() {
  return (
    <>
      <Hero {...heroProps} />
      <div className="grid items-center grid-cols-1 container section-spacing md:gap-16 md:grid-cols-2 lg:gap-32">
        <Form />
        <Image
          alt="Contact form illustration."
          className="hidden md:block"
          loading="lazy"
          src={svg}
        />
      </div>
    </>
  )
}
