'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitHub, LinkedIn, Instagram } from '../components/Icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const links = {
  internal: [
    { name: 'Apps', link: '/apps' },
    { name: 'Websites', link: '/websites' },
    { name: 'Contact', link: '/contact' },
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

export default function Header() {
  const [parent] = useAutoAnimate()
  const [isNavOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setNavOpen(false), [pathname])
  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full">
      <div className="container py-5 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img className="h-7 w-auto" width={127} height={28} src="/assets/logo.svg" alt="Logo" />
        </Link>
        <nav className="ml-auto space-x-6 hidden md:block">
          {links.internal.map(({ link, name }) => (
            <Link
              key={name}
              href={link}
              className={`text-sm font-semibold transition-colors hover:text-white ${
                isActive(link) ? 'text-white' : 'text-zinc-400'
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
              className="size-5 hidden md:block transition-colors text-zinc-300 hover:text-white"
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
      <div ref={parent}>
        {isNavOpen && (
          <nav className="container md:hidden flex flex-col flex-wrap gap-5">
            <div className="flex items-center gap-5">
              {links.internal.map(({ link, name }) => (
                <div key={name}>
                  <Link
                    aria-disabled={!isNavOpen}
                    href={link}
                    className={`block font-semibold text-sm transition-colors tracking-tight hover:text-white ${
                      isActive(link) ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 pb-5">
              {links.external.map((link) => (
                <a
                  key={link.link}
                  aria-disabled={!isNavOpen}
                  aria-label={`${link.name} link`}
                  href={link.link}
                  target="_blank"
                  rel="noopener"
                  className="size-6 text-zinc-400 transition-colors hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
