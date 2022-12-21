import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from "./BackToTop"
import { useRouter } from "next/router"
import Head from 'next/head'

interface Props {
  children: React.ReactNode
  description: string
  title: string
}

export default function Page(props: Props) {
  const devMode = process.env.NODE_ENV === 'development'
  const { children, description, title } = props
  const router = useRouter()

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://mattwaler.dev/assets/og.png" />
        <meta property="og:site_name" content="Matt Waler" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mattwaler.dev/assets/og.png" />
        <meta property="og:image:alt" content="Matt Waler's Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="canonical" href={`https://mattwaler.dev${router.pathname}`} />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </>
  )
}
