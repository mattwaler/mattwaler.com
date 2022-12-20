import { NextSeo } from "next-seo"
import { Toaster } from 'react-hot-toast'
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

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, }}
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
