import Hero from 'components/Hero'
import Overview from 'blocks/InstructionOverview'
import Offerings from 'blocks/InstructionOfferings'
import Pricing from 'blocks/InstructionPricing'
import Form from 'blocks/InstructionForm'
import Page from 'components/Page'

const heroProps = {
  heading: 'Schedule a personalized pair programming session.',
  paragraph:
  'I offer pair programming sessions for developers to help sharpen their skills with modern frontend tools and frameworks. Ask questions as you work alongside a living breathing person.',
}

const seo = {
  title: heroProps.heading.replace('.', ''),
  description: heroProps.paragraph,
}

export default function Instruction() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <Overview />
      <Offerings />
      <Pricing />
      <Form />
    </Page>
  )
}
