import { Arrow } from 'components/Icons'
import work from 'data/work'

export default function WorkListing() {
  return (
    <section className="container section-spacing">
      {work.map((item, index) => (
        <article
          key={item.title}
          className={`flex flex-wrap items-center ${
            index !== 0 && 'pt-12 mt-12 border-t'
          }`}
        >
          <img
            alt={`${item.title} image`}
            className="w-full object-top h-64 bg-gray-200 md:w-1/2 lg:w-1/3"
            src={item.image}
            loading="lazy"
          />
          <div className="mt-8 flex-1 md:pl-12 md:mt-0">
            <a target="_blank" href={item.link}>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-none">
                {item.title}
              </h2>
              <p className={`text-sm font-medium underline ${item.color}`}>
                {item.link}
              </p>
            </a>
            <p className="text-base text-gray-700 mt-4">{item.description}</p>
            <a
              target="_blank"
              href={item.link}
              className={`inline-flex items-center mt-6 ${item.color} font-bold`}
            >
              <span className="leading-none">View Project</span>
              <span className="w-4 ml-1">
                <Arrow />
              </span>
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
