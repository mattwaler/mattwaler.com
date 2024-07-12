'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Collapse } from 'react-collapse'

export default function Alert() {
  const [showAlert, setShowAlert] = useState(true)
  useEffect(() => {
    if (typeof window !== undefined) {
      setShowAlert(JSON.parse(sessionStorage.getItem('showAgoneAlert') ?? "true"))
    }
  }, [])
  useEffect(() => {
    sessionStorage.setItem('showAgoneAlert', JSON.stringify(showAlert))
  }, [showAlert])

  return (
    <Collapse isOpened={showAlert}>
      <div className="w-full gradient text-zinc-900 border-t py-3">
        <div className="container flex items-center justify-between">
          <Link href="/apps/agone" className="font-bold underline">
            <span className="hidden sm:block">
              Introducing Agone: Recurring Task Tracker.
            </span>
            <span className="sm:hidden">Agone: Recurring Task Tracker</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowAlert(false)} aria-label="Dismiss alert">
              <XMarkIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </Collapse>
  )
}
