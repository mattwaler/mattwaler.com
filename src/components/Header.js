import { useState, useEffect } from 'react'
import { Logo } from 'components/Icons'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import links from 'data/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setNavOpen(false))
  }, [])

  const isActive = (path) => router.pathname === path

  return (
    <header className="gradient-purple text-white">
      <div className="container py-5 flex items-center">
        <Link href="/">
          <a className="flex items-center">
            <span className="w-6 h-6 text-indigo-200">
              <Logo />
            </span>
            <span className="ml-2 leading-none font-extrabold text-xl">mattwaler</span>
          </a>
        </Link>
        <nav className="ml-auto space-x-4 hidden md:block">
          {links.internal.map(({ link, name }) => (
            <Link key={name} href={link}>
              <a
                className={`text-sm font-semibold transition-colors duration-200 hover:text-white ${
                  isActive(link) ? 'text-white' : 'text-indigo-200'
                }`}
              >
                {name}
              </a>
            </Link>
          ))}
        </nav>
        <nav className="ml-auto md:ml-20 flex space-x-4 text-indigo-300">
          {links.external.map((link) => (
            <a
              key={link.link}
              aria-label={`${link.name} link`}
              href={link.link}
              target="_blank"
              rel="noopener"
              className="w-5 h-5 hidden md:block transition-colors duration-200 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
          <button aria-label="Toggle mobile menu" className="w-6 h-6 md:hidden" onClick={() => setNavOpen(!isNavOpen)}>
            {isNavOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>
      <div className="container">
        <div className="h-px bg-indigo-200" style={{ opacity: '0.2' }} />
      </div>
      {isNavOpen && (
        <nav className="container md:hidden">
          {links.internal.map(({ link, name }) => (
            <div key={name}>
              <Link href={link}>
                <a
                  className={`block py-4 font-semibold text-sm tracking-tight ${
                    isActive(link) ? 'text-white' : 'text-indigo-200'
                  }`}
                >
                  {name}
                </a>
              </Link>
              <div className="h-px bg-indigo-200" style={{ opacity: '0.2' }} />
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
