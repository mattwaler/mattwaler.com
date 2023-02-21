import { useState, useEffect } from 'react'
import { GitHub, LinkedIn, Instagram } from '../components/Icons'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Collapse } from 'react-collapse';

export const links = {
  internal: [
    { name: 'Contact', link: '/contact' },
    { name: 'Instruction', link: '/instruction' },
    { name: 'Work', link: '/work' },
  ],
  external: [
    { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/mattwaler' },
    {
      name: 'Instagram',
      icon: <Instagram />,
      link: 'https://www.instagram.com/mattwaler',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/mattwaler/',
    },
  ],
}

export default function PageHeader() {
  const [isNavOpen, setNavOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setNavOpen(false))
  }, [])

  const isActive = (path: string) => router.pathname === path

  return (
    <header className="bg-slate-900 w-full border-b">
      <div className="container py-5 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img className="h-7" src="/assets/logo.svg" alt="Logo" />
        </Link>
        <nav className="ml-auto space-x-4 hidden md:block">
          {links.internal.map(({ link, name }) => (
            <Link
              key={name}
              href={link}
              className={`text-sm font-semibold transition-colors hover:text-white ${
                isActive(link) ? 'text-white' : 'text-slate-400'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
        <nav className="ml-auto md:ml-20 flex space-x-4">
          {links.external.map((link) => (
            <a
              key={link.link}
              aria-label={`${link.name} link`}
              href={link.link}
              target="_blank"
              rel="noopener"
              className="w-5 h-5 hidden md:block transition-colors text-slate-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
          <button
            aria-label="Toggle mobile menu"
            className="w-6 h-6 md:hidden"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </nav>
      </div>
      <Collapse isOpened={isNavOpen}>
        <nav className="container md:hidden flex flex-wrap items-center justify-between gap-x-4">
          <div className="flex items-center gap-4 pb-1">
            {links.internal.map(({ link, name }) => (
              <div key={name}>
                <Link
                  href={link}
                  className={`block py-4 font-semibold text-sm transition-colors tracking-tight hover:text-white ${
                    isActive(link) ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 pb-1">
            {links.external.map((link) => (
              <a
                key={link.link}
                aria-label={`${link.name} link`}
                href={link.link}
                target="_blank"
                rel="noopener"
                className="w-5 h-5 text-slate-400 transition-colors hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </Collapse>
    </header>
  )
}
