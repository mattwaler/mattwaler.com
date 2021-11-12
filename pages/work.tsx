import Hero from "components/Hero"
import WorkListing from "sections/WorkListing"

const heroProps = {
  heading: "Take a gander at some of projects I have worked on.",
  paragraph: "A non-comprehensive list of the most recent web applications I have helped develop and deploy.",
}

const Work: Page = () => {
  return (
    <>
      <Hero {...heroProps} />
      <WorkListing />
    </>
  )
}

Work.meta = {
  title: "Work",
  description: heroProps.paragraph,
}

export default Work
