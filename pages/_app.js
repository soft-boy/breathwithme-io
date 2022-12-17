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
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
