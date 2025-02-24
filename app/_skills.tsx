import Intro from '../components/Intro'
import {
  ArrowRightIcon,
  AcademicCapIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const skills = [
  {
    name: 'Applications',
    description:
      'I can create and publish iOS applications directly to the App Store.',
    icon: <CommandLineIcon />,
    color: 'text-mw-teal',
    link: '/apps',
    linkText: 'View Apps',
  },
  {
    name: 'Websites',
    description:
      'I can build single page applications, fullstack CMS projects, and everything in between.',
    icon: <GlobeAltIcon />,
    color: 'text-mw-blue',
    link: '/websites',
    linkText: 'View Websites',
  },
  {
    name: 'Consulting',
    icon: <AcademicCapIcon />,
    description:
      'I can provide insights and consulting for any of my day-to-day tools.',
    color: 'text-mw-purple',
    link: '/contact',
    linkText: 'Contact Me',
  },
]

const Skills = () => (
  <section className='max-w-screen-xl mx-auto'>
    <div className="relative container section-spacing">
      <Intro
        heading="Jack of all trades. Master of some."
        subheading="I can make myself useful in a whole number of ways."
      />
      <div className="mt-12 grid gap-12 sm:gap-16 sm:mt-24 grid-cols-1 md:text-center md:grid-cols-3 lg:gap-24">
        {skills.map((skill) => (
          <div key={skill.name} className="flex md:flex-col">
            <span
              className={`w-10 h-10 md:w-16 md:h-16 flex-shrink-0 mx-auto animate-grow ${skill.color}`}
            >
              {skill.icon}
            </span>
            <div className="ml-6 md:ml-0 flex-1 flex flex-col">
              <h3 className="h4 md:mt-6">{skill.name}</h3>
              <p className="mt-2 text-balance md:mt-3 text-zinc-300">{skill.description}</p>
              <span className="block h-4"></span>
              <a
                className={`mt-auto flex md:justify-center items-center font-extrabold ${skill.color}`}
                href={skill.link}
              >
                {skill.linkText}
                <span className="ml-1 w-4 h-4">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
