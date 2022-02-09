import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import ContactCTA from 'sections/ContactCTA'

export default function Page(props) {
  const { children, title, description } = props
  const devMode = process.env.NODE_ENV === 'development'

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
      <div className={`flex flex-col min-h-screen ${devMode && 'debug-screens'}`}>
        <Toaster />
        <Header />
        <main className={`flex-1`}>
          <Hero heading={title} paragraph={description} />
          <div className="container section-spacing prose prose-pre:p-0 lg:prose-lg">
            {children}
          </div>
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
