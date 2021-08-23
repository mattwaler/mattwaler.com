import Head from "next/head"

export default function PageHead({ meta }: { meta: Meta }) {
  const { title, description } = meta

  return (
    <Head>
      {/* Meta */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* OG Image */}
      <meta property="og:image" content="/assets/fam.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/favicons/180.png" />
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* Page Meta */}
      <title>{title} | Matt Waler</title>
      <meta name="description" content={description} />
    </Head>
  )
}
