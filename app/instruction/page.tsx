import Hero from 'components/Hero'
import Overview from 'app/instruction/_overview'
import Offerings from 'app/instruction/_offerings'
import Pricing from 'app/instruction/_pricing'
import Form from 'app/instruction/_form'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/instruction'
  },
  title: 'Matt Waler offers personalized pair programming sessions for Frontend and Swift Development',
  description:
    'I offer pair programming sessions for developers to help sharpen their skills with modern frontend tools and frameworks. Ask questions as you work alongside a living breathing person.',
}

export default function Instruction() {
  return (
    <>
      <Hero heading={`Schedule a personalized pair programming session.`} paragraph={metadata.description} />
      <Overview />
      <Offerings />
      <Pricing />
      <Form />
    </>
  )
}
