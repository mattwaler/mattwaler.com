import { CheckCircleIcon } from '@heroicons/react/24/outline'

const offerings = [
  {
    heading: 'The Big Names',
    description:
      'The stuff we constantly hear about. These are the skills that can get you hired anywhere.',
    bullets: ['React', 'React Native', 'Typescript', 'Vue'],
  },
  {
    heading: 'The Lesser Knowns',
    description:
      'Tools you do not hear about nearly as much, but pack just as much punch, possibly even more so.',
    bullets: ['AlpineJS', 'Craft CMS', 'Eleventy', 'Tailwind CSS'],
  },
  {
    heading: 'Tooling',
    description: 'These are the tools that will up your game across the board.',
    bullets: ['Git', 'NPM', 'VS Code', 'ZSH'],
  },
]

export default function InstructionOfferings() {
  return (
    <section id="offerings" className="bg-gray-900 border-t">
      <div className="container section-spacing">
        <div className="lg:text-center">
          <h3 className="font-bold text-3xl">What I Can Offer.</h3>
          <p className="mt-2 text-lg">
            I only teach the languages, tooling, and frameworks I know
            intimately.
          </p>
        </div>
        <div className="mt-16 grid gap-16 grid-cols-1 lg:gap-24 lg:grid-cols-3">
          {offerings.map((item) => (
            <div key={item.heading} className="flex flex-col">
              <h4 className="font-bold text-lg">{item.heading}</h4>
              <p className="mt-2">{item.description}</p>
              <span className="mt-8"></span>
              <div className="mt-auto space-y-2">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center">
                    <span className="block w-4 h-4 text-indigo-400">
                      <CheckCircleIcon />
                    </span>
                    <span className="ml-2">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
