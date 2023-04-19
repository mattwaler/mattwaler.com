import Hero from 'components/Hero'
import Overview from 'app/instruction/__overview'
import Offerings from 'app/instruction/__offerings'
import Pricing from 'app/instruction/__pricing'
import Form from 'app/instruction/__form'

const heroProps = {
  heading: 'Schedule a personalized pair programming session.',
  paragraph:
  'I offer pair programming sessions for developers to help sharpen their skills with modern frontend tools and frameworks. Ask questions as you work alongside a living breathing person.',
}

export const metadata = {
  title: heroProps.heading.replace('.', ''),
  description: heroProps.paragraph,
}

export default function Instruction() {
  return (
    <>
      <Hero {...heroProps} />
      <Overview />
      <Offerings />
      <Pricing />
      <Form />
    </>
  )
}
