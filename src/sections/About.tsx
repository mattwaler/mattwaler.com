import Intro from 'components/Intro'
import Dehang from 'components/Dehang'
import { CheckCircleIcon } from '@heroicons/react/solid'

const content = [
  {
    heading: 'Skills',
    subheading:
      'A non-comprehensive list of the tools that I use day-in and day-out to get my work done:',
    image: '/assets/skills.svg',
    items: [
      'Alpine.js',
      'Craft CMS',
      'Eleventy',
      'Next.js',
      'React',
      'TailwindCSS',
    ],
  },
  {
    heading: 'Hobbies',
    subheading:
      "If I'm not writing code, then I am most likely doing one or multiple of the following:",
    image: '/assets/hobbies.svg',
    items: [
      'Practicing my Tennis serve',
      'Watching Edgar Wright movies',
      'Losing online Chess matches',
      'Lifting weights at Planet Fitness',
      'Listening to Pop-punk music',
    ],
  },
]

const isEven = (index: number) => index % 2 === 0

const About = () => (
  <section className="container section-spacing">
    <Intro
      heading="Let's get to know each other better."
      subheading="I'll keep it really short and sweet for you."
    />
    {content.map((section, index) => (
      <div
        key={section.heading}
        className="mt-16 grid items-center gap-8 grid-cols-1 md:mt-32 md:grid-cols-2 md:gap-24"
      >
        <div className={!isEven(index) ? 'order-1 md:order-2' : ''}>
          <img
            className="w-2/3 mx-auto md:w-full"
            src={section.image}
            alt={`${section.heading} illustration.`}
          />
        </div>
        <div className={!isEven(index) ? 'order-2 md:order-1' : ''}>
          <h3 className="text-2xl md:text-3xl font-bold">{section.heading}</h3>
          <Dehang
            text={section.subheading}
            className="mt-2 text-lg md:text-xl"
            tag="p"
          />
          <ul className="mt-4 flex flex-col gap-2">
            {section.items.map((item) => (
              <li className="flex items-center gap-2 md:text-lg" key={item}>
                <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
)

export default About
