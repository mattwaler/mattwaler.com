'use client'

import { useWindowScroll } from 'react-use'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function BackToTop() {
  const { y } = useWindowScroll()
  const showButton = y > 200

  return (
    <a
      aria-label="Back to top"
      href="#top"
      className={clsx(
        'fixed z-50 bottom-6 right-6 rounded-full transition-opacity gradient p-0.5 shadow-lg',
        showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <ArrowUpCircleIcon className="w-10 h-10" />
    </a>
  )
}
