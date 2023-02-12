import { CheckCircleIcon } from '@heroicons/react/24/outline'

const pricing = [
  {
    name: 'Meet & Greet',
    slug: 'meet',
    price: '0',
    duration: '15',
    description:
      'A brief free session to get to know each other and determine if you are interested.',
    bullets: [
      'Completely Free',
      'Talk Through Goals',
      'Find Out Background',
      'Become BFFs',
    ],
  },
  {
    name: 'Full Session',
    slug: 'session',
    price: '45',
    duration: '45',
    description:
      'A completely personalized pair-programming session to learn modern frontend development.',
    bullets: [
      'Personalized Session',
      'Unlimited Questions',
      'You Choose The Topics',
      'Also Become BFFs',
    ],
  },
]

function focusForm(value: string) {
  const form = document.getElementById('schedule') as HTMLElement
  const select = document.getElementById('instruction-type') as HTMLInputElement
  console.log(form, select)
  if (form && select) {
    form.scrollIntoView({ behavior: 'smooth' })
    select.value = value
  }
}

export default function InstructionPricing() {
  return (
    <section id="pricing" className="section-spacing relative border-t">
      <div className="absolute w-full h-full top-0 left-0 z-0 lg:h-4/6"></div>
      <div className="relative container text-white z-20">
        <div className="lg:text-center">
          <h2 className="h2">One Size Fits All Pricing.</h2>
          <p className="mt-2 text-lg">
            Completely personalized sessions, all at one low price.
          </p>
        </div>
      </div>
      <div className="relative mt-16 container grid gap-16 grid-cols-1 lg:gap-24 lg:grid-cols-2">
        {pricing.map((item) => (
          <div
            key={item.name}
            className="bg-slate-800 border rounded p-8 flex flex-col items-start shadow-lg"
          >
            <span className="bg-mw-purple font-bold px-4 py-2 rounded">
              {item.name}
            </span>
            <div className="mt-8 flex items-center leading-none">
              <span className="font-black text-4xl">${item.price}</span>
              <span className="text-slate-300 text-sm ml-2">
                for {item.duration} mins
              </span>
            </div>
            <p className="mt-4">{item.description}</p>
            <div className="mt-4 space-y-2">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center">
                  <span className="block w-4 h-4 text-mw-teal">
                    <CheckCircleIcon />
                  </span>
                  <span className="ml-2">{bullet}</span>
                </div>
              ))}
            </div>
            <div className="mt-8"></div>
            <button
              onClick={() => focusForm(item.slug)}
              className="mt-auto button w-full text-center"
            >
              Schedule Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
