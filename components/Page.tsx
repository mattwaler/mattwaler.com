import { useEffect } from 'react'
import { useRouter } from "next/router"
import { toast } from 'react-hot-toast'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from "./BackToTop"

interface Props {
  children: React.ReactNode
  description: string
  title: string
}

export default function Page(props: Props) {
  const devMode = process.env.NODE_ENV === 'development'
  const { children, description, title } = props
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.has('contact') && toast.success('Thanks for reaching out. I will be in touch with you shortly!', { duration: 2000 })
  }, [])

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://mattwaler.dev${router.pathname}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
