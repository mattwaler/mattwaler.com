'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Collapse } from 'react-collapse'
import links from 'assets/links'

export default function PageHeader() {
  const [isNavOpen, setNavOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setNavOpen(false), [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full border-b">
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
              className="w-5 h-5 hidden md:block transition-colors text-zinc-300 hover:text-white"
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
                    isActive(link) ? 'text-white' : 'text-zinc-400'
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
                className="w-5 h-5 text-zinc-400 transition-colors hover:text-white"
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
