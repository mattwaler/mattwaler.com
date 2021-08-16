import { Waves } from 'components/Icons'

interface Props {
  heading: string,
  paragraph: string
}

export default function Hero(props: Props) {
return (
  <>
    <section className="gradient-purple text-white py-8 lg:py-16">
    <div className="container">
      <div className="max-w-screen-md">
        <h1 className="mt-2 text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
          {props.heading}
        </h1>
        <p className="mt-4 max-w-screen-sm text-base sm:text-lg lg:text-xl text-indigo-100">
          {props.paragraph}
        </p>
      </div>
    </div>
  </section>
  <span className="w-full h-12 block gradient-purple text-gray-100">
    <Waves />
  </span>
  </>
)
}
