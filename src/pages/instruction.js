import Hero from 'components/Hero'
import InstructionOfferings from 'sections/InstructionOfferings'
import InstructionPricing from 'sections/InstructionPricing'
import InstructionForm from 'sections/InstructionForm'
import Page from 'components/Page'

const seo = {
  title: 'Instruction',
  description: 'Schedule a pair programming session with Matt Waler and learn modern web development.',
}

const heroProps = {
  heading: 'Schedule a personalized pair programming session.',
  paragraph: 'Bridge the gap to modern frontend development alongside a living, breathing person.',
}

export default function Instruction() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      {/* Overview */}
      <section id="overview" className="container section-spacing lg:text-lg">
        <h3 className="font-extrabold text-4xl">
          Frontend Development is constantly changing and evolving at breakneck speeds.
        </h3>
        <p className="mt-8">Keeping up can be difficult. That's why I started offering pair programming sessions.</p>
        <p className="mt-8">
          Documentation is not always conducive to learning. It is oftentimes either too simple, or too advanced to
          answer the questions you may have. It also rarely delves into essential skills in modern frontend development
          like project scaffolding, organization, abstraction, and much more.
        </p>
        <p className="mt-8">
          YouTube can be hit or miss as well. You may find exactly what you're looking for, but you'll most likely just
          find another bland step-by-step tutorial on how to build a todo app.
        </p>
        <p className="mt-8">
          Pair-programming sessions open up a dialog for specific questions and practical experience working in the
          tools you want to get stronger with.
        </p>
      </section>
      <InstructionOfferings />
      <InstructionPricing />
      <InstructionForm />
    </Page>
  )
}
