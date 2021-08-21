import Hero from "components/Hero"
import CodeblockCTA from "sections/ContactCTA"

const heroProps = {
  heading: "You look lost",
  paragraph: "Looks like you attempted to visit a page that does not exist. Let's get you back on track.",
}

const Custom404: Page = () => {
  return (
    <>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </>
  )
}

Custom404.meta = {
  title: "Page Not Found",
  description: "No page found. Please try again.",
}

export default Custom404
