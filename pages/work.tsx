import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'

const Work: Page = () => {
  return (
    <>
      <Hero
        heading="Things I built."
        paragraph="A list of some of the web applications I've helped design, build, and deploy to the internet. Give them a peep!"
      />
      <WorkListing />
    </>
  )
}

Work.meta = {
  title: 'Work',
  description: "A list of some of the web applications I've helped design, build, and deploy to the internet.",
}

export default Work
