import { ArrowRightIcon } from '@heroicons/react/outline'
import work from 'data/work'

export default function WorkListing() {
  return (
    <section className="container section-spacing">
      {work.map((item, index) => (
        <article
          key={item.title}
          className={`flex gap-8 flex-col items-center md:flex-row md:gap-16 ${
            index !== 0 && 'pt-12 mt-12 border-t'
          }`}
        >
          <img
            alt={`${item.title} image`}
            className="w-full object-top h-72  bg-gray-200 md:w-5/12"
            src={item.image}
            loading="lazy"
            width="592"
            height="256"
          />
          <div className="flex-1">
            <a target="_blank" href={item.link}>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-none">
                {item.title}
              </h2>
              <p className={`text-sm font-medium underline ${item.color}`}>
                {item.link}
              </p>
            </a>
            <p className="text-base text-gray-700 mt-4">{item.description}</p>
            <ul className="flex flex-wrap items-center gap-1 mt-4">
              {item.tools.map((tool) => (
                <li
                  key={tool}
                  className="text-xs tracking-tight font-bold uppercase bg-gray-300 text-gray-800 px-3 py-1 rounded-2xl"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <a
              target="_blank"
              href={item.link}
              className={`inline-flex items-center mt-6 ${item.color} font-bold`}
            >
              <span className="leading-none">Visit {item.title}</span>
              <span className="w-4 ml-1">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
