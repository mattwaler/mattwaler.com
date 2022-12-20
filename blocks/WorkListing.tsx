import { ArrowRightIcon } from '@heroicons/react/24/outline'
import work from 'assets/work'
import Text from 'components/Text'
import Image from 'next/image'

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
          <Image
            alt={`${item.title} image`}
            className="w-full object-top object-cover h-72 bg-gray-800 md:w-5/12 rounded-lg shadow-lg"
            src={item.image}
            width="592"
            height="288"
            placeholder='blur'
          />
          <div className="flex-1">
            <a target="_blank" href={item.link}>
              <Text
                tag="h2"
                className="text-2xl md:text-3xl font-extrabold leading-none"
                content={item.title}
              />
              <Text
                tag="p"
                className={`text-sm font-medium underline ${item.color}`}
                content={item.link}
              />
            </a>
            <Text
              tag="p"
              className="text-base text-gray-300 mt-3"
              content={item.description}
            />
            <ul className="flex flex-wrap items-center gap-1 mt-4">
              {item.tools.map((tool) => (
                <li
                  key={tool}
                  className="text-xs tracking-tight font-bold uppercase bg-gray-700 text-gray-100 px-3 py-1 rounded-2xl"
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
