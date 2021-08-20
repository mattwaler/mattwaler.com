import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'

const heroProps = {
  heading: 'Things I built.',
  paragraph: "A list of some of the web applications I've helped design, build, and deploy to the internet. Give them a peep!"
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
  title: 'Work',
  description: "A list of some of the web applications I've helped design, build, and deploy to the internet.",
}

export default Work
