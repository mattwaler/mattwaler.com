import Hero from 'components/Hero'
import InstructionOverview from 'pages/instruction/views/InstructionOverview'
import InstructionOfferings from 'pages/instruction/views/InstructionOfferings'
import InstructionPricing from 'pages/instruction/views/InstructionPricing'
import InstructionForm from 'pages/instruction/views/InstructionForm'
import Page from 'components/Page'

const seo = {
  title: 'Instruction',
  description:
    'Schedule a pair programming session with Matt Waler and learn modern web development.',
}

const heroProps = {
  heading: 'Schedule a personalized pair programming session.',
  paragraph:
    'I offer pair programming sessions for developers to help sharpen their skills with modern frontend tools and frameworks. Ask questions as you work alongside a living breathing person.',
}

export default function Instruction() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <InstructionOverview />
      <InstructionOfferings />
      <InstructionPricing />
      <InstructionForm />
    </Page>
  )
}
