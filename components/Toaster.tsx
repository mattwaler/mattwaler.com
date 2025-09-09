'use client'

import { useEffect } from 'react'
import { Toaster as HotToaster, toast } from 'react-hot-toast'

export default function Toaster() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.has('contact') &&
      toast.success(
        'Thanks for reaching out. I will be in touch with you shortly!',
        { duration: 2000 }
      )
  }, [])

  return (
    <>
      <HotToaster />
    </>
  )
}
