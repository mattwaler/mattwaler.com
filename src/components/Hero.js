export default function Hero({ heading, paragraph }) {
  return (
    <section className="gradient-purple text-white py-8 lg:py-16">
      <div className="container">
        <h1 className="h1">{heading}</h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-indigo-100">{paragraph}</p>
      </div>
    </section>
  )
}
