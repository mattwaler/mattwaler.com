import 'styles/_app.css'
import Head from 'next/head'
import Favicons from 'components/Favicons'

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
        <Favicons />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
