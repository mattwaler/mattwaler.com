import "styles/main.css"
import PageHead from "sections/PageHead"
import PageHeader from "sections/PageHeader"
import PageFooter from "sections/PageFooter"
import { Toaster } from 'react-hot-toast'

const devMode = process.env.NODE_ENV === "development"

export default function MyApp({ Component, pageProps }: App) {
  return (
    <>
      <PageHead meta={Component.meta} />
      <div className={`flex flex-col min-h-screen ${devMode && "debug-screens"}`}>
        <Toaster />
        <PageHeader />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <PageFooter />
      </div>
    </>
  )
}
