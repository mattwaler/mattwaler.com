import { ArrowRightIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'
import code from 'assets/code'

export default function ContactCTA() {
  return (
    <div className="border-t">
      <section className="container flex flex-wrap items-center section-spacing">
        <div
          aria-hidden="true"
          className="w-full lg:w-1/2 bg-slate-800 p-4 text-white rounded-lg shadow-lg text-sm sm:text-base"
        >
          <div className="space-x-2 flex items-center">
            <div className="rounded-full w-3 h-3 bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
          </div>
          <pre dangerouslySetInnerHTML={{ __html: code }} />
        </div>
        <div className="w-full max-w-2xl mx-auto mt-12 lg:mt-0 lg:w-1/2 lg:pl-16">
          <h3 className="relative inline h4">
            Do you want to build a website?
            <span
              className="text-mw-purple w-6 h-6 absolute lg:hidden animate-bounce"
              style={{ top: '-32px', left: '-16px' }}
            >
              <MusicalNoteIcon className="text-mw-purple" />
            </span>
            <span
              className="w-8 h-8 absolute hidden lg:block animate-bounce"
              style={{ top: '-32px', left: '-32px' }}
            >
              <MusicalNoteIcon className="text-mw-purple" />
            </span>
          </h3>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
            Don't get <strong className="font-bold italic text-mw-blue">Frozen</strong> with an
            app you don't love. I can refactor, refresh, or just rebuild you a
            new web-based application that will knock your socks off.
          </p>
          <a
            className="inline-flex items-center mt-6 text-mw-teal rounded font-bold "
            href="/contact/"
          >
            Contact Me
            <span className="w-4 h-4 ml-1">
              <ArrowRightIcon />
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
