import { NextSeo } from "next-seo"
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from "./BackToTop"
import { useRouter } from "next/router"

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
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, }}
        canonical={`https://mattwaler.dev${router.pathname}`}
      />
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
