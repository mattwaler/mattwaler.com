import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Phone from 'components/Phone'
import agoneHome from 'assets/agone-home.webp'
import agoneAll from 'assets/agone-all.webp'
import oftSettings from 'assets/oft-settings.webp'
import oftCountdown from 'assets/oft-countdown.webp'
import PhoneCarousel from 'components/PhoneCarousel'

const content = [
  {
    heading: 'Agone: Task Tracker',
    description:
      'Agone is a recurring task tracker. You can create repeating items, custom groups, and get completion history and push notifications when things are due.',
    link: '/apps/agone',
    images: [agoneHome, agoneAll],
    color: 'text-mw-blue',
    tools: ['Swift', 'Swift UI', 'Swift Data'],
  },
  {
    heading: 'Oft: Fitness Timer',
    description:
      'A no-fuss fitness timer that allows a user to customize timer duration, repeats, and rest time.',
    link: 'https://apps.apple.com/us/app/fitness-timer-simple/id1659047701?platform=iphone',
    images: [oftCountdown, oftSettings],
    color: 'text-mw-teal',
    tools: ['Swift', 'Swift UI'],
  },
]

const isEven = (index: number) => index % 2 === 0

function About() {
  return (
    <section className="container section-spacing grid grid-cols-1 gap-24">
      {content.map((section, index) => (
        <div
          key={section.heading}
          className="grid items-center gap-8 grid-cols-1 md:grid-cols-2 md:gap-16"
        >
          <div className={`flex gap-4 ${!isEven(index) ? 'order-1 md:order-2' : ''}`}>
            <PhoneCarousel color={section.color} images={section.images} />
          </div>
          <div className={!isEven(index) ? 'order-2 md:order-1' : ''}>
            <Link href={section.link}>
              <h3 className={`h3 ${section.color}`}>{section.heading}</h3>
            </Link>
            <p className={`text-pretty mt-2 text-lg xl:text-xl text-zinc-300`}>
              {section.description}
            </p>
            <ul className="flex flex-wrap items-center gap-1 mt-4">
              {section.tools.map((tool) => (
                <li
                  key={tool}
                  className="text-xs tracking-tight font-bold uppercase bg-zinc-700 text-zinc-100 px-3 py-1 rounded-2xl"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <Link
              href={section.link}
              className={`inline-flex items-center text-lg mt-6 ${section.color} font-bold`}
            >
              <span className="leading-none">View {section.heading}</span>
              <span className="w-4 ml-1">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default About
