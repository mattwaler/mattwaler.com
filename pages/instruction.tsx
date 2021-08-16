import Layout from "components/Layout";
import Hero from 'components/Hero'
import InstructionOverview from 'sections/InstructionOverview'
import InstructionOfferings from "sections/InstructionOfferings";
import InstructionTestimonials from "sections/InstructionTestimonials";
import InstructionPricing from "sections/InstructionPricing";
import InstructionForm from 'sections/InstructionForm'

const Instruction: NextPage = () => {
  return (
    <Layout meta={{ title: 'Instruction', description: '' }}>
      <>
        <Hero heading="Schedule A Personalized Pair Programming Session." paragraph="Bridge the gap to modern frontend development alongside a living, breathing person who can answer your questions in real time." />
        <InstructionOverview />
        <InstructionOfferings />
        <InstructionTestimonials />
        <InstructionPricing />
        <InstructionForm />
      </>
    </Layout>
  );
};

export default Instruction
