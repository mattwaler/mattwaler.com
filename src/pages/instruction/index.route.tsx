import Hero from 'components/Hero'
import Overview from 'pages/instruction/views/Overview'
import Offerings from 'pages/instruction/views/Offerings'
import Pricing from 'pages/instruction/views/Pricing'
import Form from 'pages/instruction/views/Form'
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
