import 'styles/main.css'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('contact')) {
      toast.success('Thanks for reaching out!')
    }
  }, [])
  return <Component {...pageProps} />
}
