import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from './BackToTop'

interface Props {
  children: React.ReactNode
}

export default function Page(props: Props) {
  const devMode = process.env.NODE_ENV === 'development'
  const { children } = props

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
