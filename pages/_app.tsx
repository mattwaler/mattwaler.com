import 'styles/_app.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="robots" content="all" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://mattwaler.dev/assets/og.png" />
        <meta property="og:site_name" content="Matt Waler" />
        <meta property="og:image" content="https://mattwaler.dev/assets/og.png" />
        <meta property="og:image:alt" content="Matt Waler's Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}
