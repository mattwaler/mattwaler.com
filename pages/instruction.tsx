import Hero from "components/Hero"
import InstructionOverview from "sections/InstructionOverview"
import InstructionOfferings from "sections/InstructionOfferings"
import InstructionTestimonials from "sections/InstructionTestimonials"
import InstructionPricing from "sections/InstructionPricing"
import InstructionForm from "sections/InstructionForm"

const heroProps = {
  heading: "Schedule a personalized pair programming session.",
  paragraph: "Bridge the gap to modern frontend development alongside a living, breathing person.",
}

const Instruction: Page = () => {
  return (
    <>
      <Hero {...heroProps} />
      <InstructionOverview />
      <InstructionOfferings />
      <InstructionPricing />
      <InstructionForm />
    </>
  )
}

Instruction.meta = {
  title: "Instruction",
  description: "Schedule a pair programming session with Matt Waler and learn modern web development.",
}

export default Instruction
