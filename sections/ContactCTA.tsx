import { Arrow, Music } from 'components/Icons'
import Prism from 'prismjs'
import { useEffect, useState } from 'react'

let code = `
let needsMattsHelp = true

const contactMatt = (message) => {
  return alert(message)
}

if (needsMattsHelp) {
  contactMatt("Let's get started!")
}
`

const CodeblockCTA = () => {
  const [highlightedCode, setHighlightedCode] = useState('')
  useEffect(() => {
    const newCode = Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript'
    )
    setHighlightedCode(newCode)
  }, [])

  return (
    <section className="container flex flex-wrap items-center section-spacing">
      <div className="w-full lg:w-1/2 bg-gray-900 p-4 text-white rounded-lg shadow-lg text-sm sm:text-base">
        <div className="space-x-2 flex items-center">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="py-6">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
          </pre>
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-12 text-center lg:mt-0 lg:w-1/2 lg:pl-16 lg:text-left">
        <h3 className="relative inline text-2xl font-extrabold leading-tight lg:text-3xl">
          Do you want to build a website?
          <span
            className="w-6 h-6 absolute lg:hidden animate-bounce"
            style={{ top: '-16px', left: '-32px' }}
          >
            <Music />
          </span>
          <span
            className="w-8 h-8 absolute hidden lg:block animate-bounce"
            style={{ top: '-32px', left: '-32px' }}
          >
            <Music />
          </span>
        </h3>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
          Don't get <strong className="font-bold italic">Frozen</strong> with a
          site you don't love. I can refactor, refresh, or just rebuild you a
          new website that will knock your socks off.
        </p>
        <a
          className="inline-flex items-center mt-6 text-indigo-500 rounded font-bold "
          href="/contact/"
        >
          Contact Me
          <span className="w-4 h-4 ml-1">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  )
}

export default CodeblockCTA
