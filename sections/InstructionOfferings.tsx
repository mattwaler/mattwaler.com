import { Waves } from "components/Icons"
import { CheckCircleIcon } from "@heroicons/react/outline"

const offerings = [
  {
    heading: "The Big Names",
    description: "The stuff we constantly hear about. These are the skills that can get you hired anywhere.",
    bullets: ["React", "Svelte", "Typescript", "Vue"],
  },
  {
    heading: "The Lesser Knowns",
    description: "Tools you do not hear about nearly as much, but pack just as much punch, possibly even more so.",
    bullets: ["AlpineJS", "Craft CMS", "Eleventy", "Tailwind CSS"],
  },
  {
    heading: "Tooling",
    description: "These are the tools that will up your game across the board.",
    bullets: ["Git", "NPM", "VS Code", "ZSH"],
  },
]

export default function InstructionOfferings() {
  return (
    <>
      <span className="z-0 w-full h-16 block bg-gray-200 text-gray-100 rotate-180">
        <Waves />
      </span>
      <section id="offerings" className="bg-gray-200">
        <div className="container section-spacing">
          <div className="lg:text-center">
            <h3 className="font-bold text-3xl">What I Can Offer.</h3>
            <p className="mt-2 text-lg">I only teach the languages, tooling, and frameworks I know intimately.</p>
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
      <span className="z-0 w-full h-16 block bg-gray-200 text-gray-900">
        <Waves />
      </span>
    </>
  )
}
