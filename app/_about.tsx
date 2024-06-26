import Intro from '../components/Intro'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const content = [
  {
    heading: 'Skills',
    subheading:
      'A non-comprehensive list of the tools that I use day-in and day-out to get my work done:',
    image: '/assets/skills.svg',
    imageWidth: 440,
    imageHeight: 320,
    items: [
      'Tailwind CSS',
      'Alpine.js',
      'Statamic',
      'Swift',
      'React',
      'Next.js',
      'Craft CMS',
      'React Native',
    ],
  },
  {
    heading: 'Hobbies',
    subheading:
      "If I'm not writing code, I am most likely doing one or multiple of the following:",
    image: '/assets/hobbies.svg',
    imageWidth: 440,
    imageHeight: 240,
    items: [
      'Playing Tennis',
      'Lifting weights',
      'Losing Marvel Snap games',
      'Listening to pop-punk music (probably MGK)',
      'Watching films and reviewing on letterboxd',
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
            alt={`${section.heading} illustration.`}
            width={section.imageWidth}
            height={section.imageHeight}
            className="w-2/3 mx-auto md:w-full"
            loading="lazy"
            src={section.image}
          />
        </div>
        <div className={!isEven(index) ? 'order-2 md:order-1' : ''}>
          <h3 className="h4">{section.heading}</h3>
          <p className='text-pretty mt-2 text-lg md:text-xl'>
            {section.subheading}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {section.items.map((item) => (
              <li className="flex items-center gap-2 md:text-lg" key={item}>
                <CheckCircleIcon className="w-5 h-5 text-mw-purple" />
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
