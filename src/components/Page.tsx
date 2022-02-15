import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import PageHeader from "sections/PageHeader"
import PageFooter from "sections/PageFooter"

interface Props {
  children: React.ReactNode
  description: string,
  title: string
}

export default function Page(props: Props) {
  const devMode = process.env.NODE_ENV === "development"
  const { children, description, title } = props

  return (
    <>
      {/* Page Head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:image" content="/assets/fam.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>{title} | Matt Waler</title>
        <meta name="description" content={description} />
      </Head>

      {/* Page Markup */}
      <div className={`flex flex-col min-h-screen ${devMode && "debug-screens"}`}>
        <Toaster />
        <PageHeader />
        <main className="flex-1">
          {children}
        </main>
        <PageFooter />
      </div>
    </>
  )
}
