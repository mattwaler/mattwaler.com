interface Props {
  heading: string | React.ReactNode
  paragraph: string | React.ReactNode
  image?: string
}

export default function Hero(props: Props) {
  return (
    <>
      <section className="gradient-purple text-white py-8 lg:py-16">
        <div className="container flex items-center flex-col-reverse gap-8 lg:gap-16 lg:flex-row">
          <div>
            <h1 className="h1">{props.heading}</h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-indigo-100">{props.paragraph}</p>
          </div>
          {props.image && (
            <img className="w-80 h-80 rounded-full border-4 border-white" src={props.image} alt="Hero image." />
          )}
        </div>
      </section>
    </>
  )
}
