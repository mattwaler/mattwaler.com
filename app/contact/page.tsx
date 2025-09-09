import Hero from 'components/Hero'
import Form from 'app/contact/_form'
import Image from 'next/image'
import svg from 'assets/contact.svg'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/contact',
  },
  title: "Contact Matt Waler",
  description: `
      Thank you for taking the time to view my website.
      If you are interested in connecting, fill out the contact form below.
      I will get back to you as soon as possible.
    `,
}

export default function Contact() {
  return (
    <>
      <Hero heading={`Let's get in touch.`} paragraph={metadata.description} />
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
