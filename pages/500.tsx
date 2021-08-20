import Hero from 'components/Hero'
import CodeblockCTA from 'sections/ContactCTA'

const heroProps = {
  heading: 'Something went wrong.',
  paragraph: 'Something went wrong on the server. Please try again or visit another page.',
}

const Custom500: Page = () => {
  return (
    <>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </>
  )
}

Custom500.meta = {
  title: 'Something went wrong',
  description: 'Something went wrong on the server. Please try again.',
}

export default Custom500
