const testimonials = [
  {
    quote:
      'Matt is not only personable, but he also cares deeply about helping anyone understand the why’s and the how’s. His knowledge of technology when it comes to React and component based development are extensive, and his solutions are innovative, creative and effective. If you’re looking for someone who understands modern web design practices and tooling, Matt is the right person for the job; you won’t be disappointed.',
    image: 'dennis.jpg',
    name: 'Dennis Gaebel',
    title: 'A11Y Project Maintainer',
  },
  {
    quote:
      'Through his hard work and dedication, Matt is very knowledgeable about current web technology and is able to see where the web is moving. He has taught me new, innovative solutions and guided me in modern best practices. He has also influenced the strategy I use to build maintainable and performant web applications. I am using modern tools more efficiently and enjoyably.',
    image: 'jayme.jpg',
    name: 'Jayme Frantz',
    title: 'Frontend Developer at Progressive',
  },
]

export default function InstructionTestimonials() {
  return (
    <section id="testimonials" className="container section-spacing">
      <div className="lg:text-center">
        <h3 className="font-bold text-3xl">What Others Are Saying.</h3>
        <p className="mt-2 text-lg">
          Here are a few votes of confidence from people you've never met
          before.
        </p>
      </div>
      <div className="mt-16 grid gap-16 grid-cols-1 lg:gap-24 lg:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.name} className="flex flex-col">
            <p className="italic border-l-4 border-indigo-500 pl-6 text-gray-700">
              {item.quote}
            </p>
            <div className="mt-8"></div>
            <div className="mt-auto flex items-center">
              <img
                className="w-16 h-16 rounded-full shadow-lg border-indigo-500 border-2"
                src={`/assets/${item.image}`}
                alt={`${item.name} image.`}
              />
              <div className="ml-4">
                <p className="font-black uppercase">{item.name}</p>
                <p className="text-gray-700">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
