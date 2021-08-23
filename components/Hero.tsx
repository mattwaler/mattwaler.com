import { Waves } from "components/Icons"

interface Props {
  heading: string | React.ReactNode
  paragraph: string | React.ReactNode
}

export default function Hero(props: Props) {
  return (
    <>
      <section className="gradient-purple text-white py-8 lg:py-16">
        <div className="container">
          <h1 className="h1">{props.heading}</h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-indigo-100">{props.paragraph}</p>
        </div>
      </section>
      <span className="w-full h-12 block gradient-purple text-gray-100">
        <Waves />
      </span>
    </>
  )
}
