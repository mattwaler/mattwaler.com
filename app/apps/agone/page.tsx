export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/apps/agone',
  },
  title: 'Agone: Recurring Task Tracker',
  description: 'A simple and easy-to-use recurring task tracker.',
  openGraph: {
    images: [{
      url: 'https://mattwaler.com/assets/agone-og.png',
      alt: 'Agone OG Image',
      width: 1440,
      height: 906,
    }],
  },
}

const appStoreLink = "https://apps.apple.com/us/app/agone-recurring-tasks-tracker/id6478084115?platform=iphone"

const steps = [
  {
    heading: 'Create a Group',
    body: 'Groups act like folders for a batch of items that relate to one another. Start by creating a group, choosing an icon, and selecting a custom color.',
  },
  {
    heading: 'Create an Item',
    body: 'Now it is time to create your first item. Be sure to set the frequency at which the app will remind you.',
  },
  {
    heading: 'Live your Life',
    body: 'That is it. Agone will now send you a notification when items are due. It will also display badges on the app icon so you do not forget.',
  },
  {
    heading: 'Upgrade to Premium',
    body: 'If you are enjoying the app, consider upgrading to lifetime premium! This will allow you to create more than 20 items.',
  },
]

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="container section-spacing pb-0 flex flex-col lg:flex-row items-center justify-between gap-24">
        <div className="flex-1">
          <div className="bg-white size-16 flex items-center justify-center rounded-lg">
            <img src="/assets/agone.svg" alt="Agone logo" className="size-14" />
          </div>
          <h1 className="mt-4 text-4xl xl:text-6xl font-extrabold tracking-tight text-balance">
            Agone makes{' '}
            <span className="text-agone-blue">tracking recurring tasks</span> and{' '}
            <span className="text-agone-blue">task organization</span> dead simple.
          </h1>
          <p className="text-lg xl:text-2xl text-zinc-400 mt-4 text-balance">
            Keeping track of all of life's recurring tasks is impossible. Make
            it possible with Agone, where you can create custom groups, custom
            intervals, and view the entire history of each task for reference.
          </p>
          <div className="mt-6">
            <a target="_blank" href={appStoreLink}>
              <img
                src="/assets/app-store.svg"
                alt="Download Agone on the App Store"
                height="53"
                width="160"
              />
            </a>
            <p className="text-sm text-zinc-400 mt-3">
              Available for iOS, iPadOS, and macOS
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[400px] lg:w-[450px] lg:h-[600px] overflow-hidden">
          <img
            src="/assets/items.png"
            alt="View of Agone app in the items view."
            height="909"
            width="450"
          />
        </div>
      </section>
      {/* Steps */}
      <section className="section-spacing pb-0 border-t">
        <div className="container flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="w-[300px] h-[400px] xl:w-[450px] xl:h-[600px] overflow-hidden order-last xl:order-first">
            <img
              src="/assets/groups.png"
              alt="View of Agone app in the groups view."
              height="909"
              width="450"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-100">
              How it works
            </h2>
            <p className="text-lg lg:text-xl text-zinc-300 mt-5">
              Agone keeps it super simple and straightforward.
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 my-7 lg:my-14">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex items-center justify-center h-8 w-8 bg-agone-blue rounded-full text-zinc-100 text-xl font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      {step.heading}
                    </h2>
                    <p className="text-zinc-400 text-lg mt-2">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {/* Privacy */}
      <section className="section-spacing border-t">
        <div className="container sm:max-w-screen-xs lg:max-w-screen-sm xl:max-w-[700px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-agone-blue mx-auto mb-4"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6 text-balance">
            Agone will never have ads, trackers, or signup forms.
          </h2>
          <p className="text-lg lg:text-2xl text-zinc-400 text-balance">
            Agone stores all your data directly in iCloud. This means your data
            is yours and yours alone, and will sync seamlessly between all of
            your devices.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a target="_blank" href={appStoreLink}>
              <img
                src="/assets/app-store.svg"
                alt="Download Agone on the App Store"
                height="53"
                width="160"
              />
            </a>
            <a
              target="_blank"
              href="https://www.privacypolicies.com/live/b7154941-c4a9-429a-814d-410182d5a0cc"
              className="bg-agone-blue text-white font-semibold lg:text-lg px-6 py-3 rounded-lg"
            >
              Privacy Policy &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
