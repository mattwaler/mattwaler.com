import 'styles/main.css'
import Head from 'next/head'
import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"
import Favicons from 'components/Favicons'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <Favicons />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
