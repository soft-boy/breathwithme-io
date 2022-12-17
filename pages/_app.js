import Head from 'next/head'
import { Inter } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <title>4-7-8 Breathing | BreathWithMe.io</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@BreathFlowHQ" />
        <meta property="twitter:title" content="4-7-8 Breathing | BreathWithMe.io" />
        <meta property="twitter:description" content="🍵 Let's take a few deep breaths together." />
        <meta property="twitter:image" content="https://breathwithme.io/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="4-7-8 Breathing | BreathWithMe.io" />
        <meta property="og:description" content="🍵 Let's take a few deep breaths together." />
        <meta property="og:url" content="https://breathwithme.io/" />
        <meta property="og:image" content="https://breathwithme.io/preview.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
