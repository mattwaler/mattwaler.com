import { NextSeo } from "next-seo"
import { Toaster } from 'react-hot-toast'
import Header from 'components/Header'
import Footer from 'components/Footer'

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
      <div />
      <NextSeo
        title={`${title} | Matt Waler`}
        description={description}
        openGraph={{ title: `${title} | Matt Waler`, description, }}
      />
      <div className="flex flex-col min-h-screen">
        <Toaster />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
