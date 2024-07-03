import 'styles/_app.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BackToTop from 'components/BackToTop'
import Toaster from 'components/Toaster'
import ClipPaths from 'components/ClipPaths'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://mattwaler.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    apple: '/favicons/apple-touch-icon-152x152.png',
    icon: '/favicons/favicon.svg',
  },
  openGraph: {
    images: [{
      url: 'https://mattwaler.com/assets/og.png',
      alt: 'Matt Waler Logo',
      width: 1440,
      height: 678,
    }],
    locale: 'en_US',
    siteName: 'Matt Waler',
    type: 'website',
  },
  robots: {
    follow: true,
    index: true,
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
  themeColor: "#09090b",
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Toaster />
        <BackToTop />
        <Footer />
        <ClipPaths />
      </body>
    </html>
  )
}
