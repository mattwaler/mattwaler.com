import 'styles/_app.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BackToTop from 'components/BackToTop'
import Toaster from 'components/Toaster'
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
      width: 1200,
      height: 627,
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
      </body>
    </html>
  )
}
