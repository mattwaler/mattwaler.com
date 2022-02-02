import { Blob } from 'components/Icons'
import { ArrowRightIcon } from '@heroicons/react/outline'
import skills from 'data/skills'

const Skills = () => (
  <section className="relative section-spacing">
    <div className="z-0 opacity-25 text-gray-300">
      <span className="absolute" style={{ width: '640px', top: '-128px', left: '-360px' }}>
        <Blob />
      </span>
      <span className="absolute" style={{ width: '640px', top: '320px', right: '-360px' }}>
        <Blob />
      </span>
    </div>
    <div className="container md:text-center">
      <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl">
        <span className="block md:inline">Jack of all trades.</span>
        <span className="block md:inline md:ml-2">Master of some.</span>
      </h2>
      <p className="text-gray-700 mt-1 italic sm:text-lg">I can make myself useful in a whole number of ways.</p>
      <div className="mt-12 grid gap-12 sm:gap-16 sm:mt-24 grid-cols-1 md:grid-cols-3 lg:gap-24">
        {skills.map((skill) => (
          <div key={skill.name} className="flex md:flex-col">
            <span className={`w-10 h-10 md:w-16 md:h-16 flex-shrink-0 mx-auto animate-grow ${skill.color}`}>
              {skill.icon}
            </span>
            <div className="ml-6 md:ml-0 flex-1 flex flex-col">
              <h2 className="font-extrabold leading-none text-xl md:mt-6 md:text-2xl">{skill.name}</h2>
              <p className="mt-2 md:mt-3 text-gray-600">{skill.description}</p>
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
