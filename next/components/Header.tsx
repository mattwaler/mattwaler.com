import { useState } from 'react'
import {Close, Menu, Logo} from 'components/Icons'
import links from 'content/links'

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <header className="gradient-purple text-white">
      <div className="container py-5 flex items-center">
        <a href="/" className="flex items-center">
          <span className="w-6 h-6 text-indigo-200">
            <Logo />
          </span>
          <span className="ml-2 leading-none font-extrabold text-xl">
            mattwaler
          </span>
        </a>
        <nav className="ml-auto space-x-4 hidden md:block">
          {links.internal.map(link => (
            <a
              className="text-sm font-semibold transition-colors duration-200 hover:text-white text-indigo-200"
              href={link.link}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <nav className="ml-auto md:ml-20 flex space-x-4 text-indigo-300">
          {links.external.map(link => (
            <a
              aria-label="github profile link"
              href={link.link}
              target="_blank"
              rel="noopener"
              className="w-5 h-5 hidden md:block transition-colors duration-200 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
          <button className="w-6 h-6 md:hidden" onClick={() => setNavOpen(!isNavOpen)}>
            {isNavOpen ? <Close /> : <Menu />}
          </button>
        </nav>
      </div>
      <div className="container">
        <div className="h-px bg-indigo-200" style={{ opacity: "0.2" }} />
      </div>
      {isNavOpen && (
        <nav className="container md:hidden">
          {links.internal.map(link => (
            <>
              <a
              className="block py-4 font-semibold text-sm tracking-tight text-white"
              href={link.link}
              >
                {link.name}
              </a>
              <div className="h-px bg-indigo-200" style={{ opacity: "0.2" }} />
            </>
          ))}
        </nav>
      )}
    </header>
  );
}
