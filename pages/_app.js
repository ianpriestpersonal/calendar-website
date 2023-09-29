import '../styles/globals.css';
import RootLayout from '../components/layout';
import Footer from '../components/Footer'
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
          <Head>
            <title>Seasonality</title>
          </Head>
        <Component {...pageProps} />
        <Analytics />
        <Footer/>
    </RootLayout>
    )
}
