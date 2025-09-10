import { ArrowRightIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="container flex flex-wrap items-center section-spacing">
        <div
          aria-hidden="true"
          className="w-full lg:w-1/2 bg-zinc-900 text-white rounded-lg overflow-hidden shadow-lg text-sm sm:text-base lg:text-lg"
        >
          <div className="space-x-2 flex items-center p-4 pb-5 border-b-2">
            <div className="rounded-full w-3 h-3 bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
          </div>
          <div className="p-4 grid grid-cols-1 font-mono">
            <span>
              <span className="text-mw-blue">let</span> needsMattsHelp ={' '}
              <span className="text-mw-teal">true</span>
            </span>
            <span className="mt-4">
              <span className="text-mw-blue">const</span>{' '}
              <span className="text-mw-purple">contactMatt</span> = (message)
              {' => {'}
            </span>
            <span className="ml-4">
              <span className="text-mw-blue">return</span>{' '}
              <span className="text-mw-purple">alert</span>
              {'(message)'}
            </span>
            <span>{'}'}</span>
            <span className="mt-4">
              <span className="text-mw-blue">if</span>
              {' (needsMattsHelp) {'}
            </span>
            <span className="ml-4">
              <span className="text-mw-purple">contactMatt</span>
              {'('}
              <span className="text-mw-teal">"Let's get started!"</span>
              {')'}
            </span>
            <span>{'}'}</span>
          </div>
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
          <p className="mt-2 sm:mt-4 text-pretty text-sm sm:text-base lg:text-lg">
            Don't get{' '}
            <strong className="font-bold italic text-mw-blue">Frozen</strong>{' '}
            with an app you don't love. I can refactor, refresh, or just rebuild
            you a new app or website that will knock your socks off.
          </p>
          <Link
            className="inline-flex button items-center mt-6 rounded"
            href="/contact"
          >
            Contact Me
            <span className="w-4 h-4 ml-1">
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
