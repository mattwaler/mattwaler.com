import Intro from 'components/Intro'
import {
  ArrowRightIcon,
  AcademicCapIcon,
  LifebuoyIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const skills = [
  {
    name: 'Development',
    description:
      'I can build single page applications, fullstack CMS projects, and everything in between.',
    icon: <CommandLineIcon />,
    color: 'text-indigo-500',
    link: '/work',
    linkText: 'View Work',
  },
  {
    name: 'Instruction',
    icon: <AcademicCapIcon />,
    description:
      'I am comfortable teaching modern tools like React, Vue, Svelte, and much more.',
    color: 'text-green-500',
    link: '/instruction',
    linkText: 'View Instruction',
  },
  {
    name: 'Consulting',
    description:
      'I can inspect, diagnose, and plan improvements for your current web project.',
    icon: <LifebuoyIcon />,
    color: 'text-blue-500',
    link: '/contact',
    linkText: 'Contact Me',
  },
]

const Skills = () => (
  <section className="border-t">
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
              <h2 className="font-extrabold leading-none text-xl md:mt-6 md:text-2xl">
                {skill.name}
              </h2>
              <p className="mt-2 md:mt-3 text-gray-300">{skill.description}</p>
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
