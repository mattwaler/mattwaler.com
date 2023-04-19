import Hero from 'components/Hero'
import Overview from 'app/instruction/_Overview'
import Offerings from 'app/instruction/_Offerings'
import Pricing from 'app/instruction/_Pricing'
import Form from 'app/instruction/_Form'

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
