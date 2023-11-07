import Head from 'next/head'

import { AuthContextProvider } from '../store/auth-context'

import Layout from '../components/layout/Layout'
import '../styles/vars.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" href="/img/style/fav.ico" />
        <link rel="apple-touch-icon" href="/img/style/fav-apple.png" sizes="180x180" />
        <link rel="icon" href="/img/style/fav.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/img/style/fav.ico" type="image/vnd.microsoft.icon" />
        <link rel="icon" href="/img/style/fav-512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/img/style/fav-256.png" sizes="256x256" type="image/png" />
        <link rel="icon" href="/img/style/fav-128.png" sizes="128x128" type="image/png" />
        <link rel="icon" href="/img/style/fav-64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/img/style/fav-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/img/style/fav-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/img/style/fav-16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/img/style/fav-16.png" sizes="16x16" type="image/png" />
        <link rel="mask-icon" href="/img/style/fav.svg" color="#FDFDFD" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#010101" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta name="msapplication-TileImage" content="/img/style/fav-150.png" />
        <title>@tijsvl | Event Photography &amp; Web Developer</title>
        <meta name="author" content="Tijs van Leur" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="tijsvl.com" />
        <meta property="og:title" key="ogTitle" content="@tijsvl | Event Photography &amp; Web Developer" />
        <meta property="og:description" key="ogDescription" content="On tour with your favorite band or at home coding what you'll never see." />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/media/og/default.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/media/og/default2.jpg" key="ogImageAlt" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/p/w/iceland_2019.09.27_17.49.46__K7A8552-2000.jpg" key="ogImageAltB" />
        <meta property="og:type" content="page" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="tijsvl.com" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | Event Photography &amp; Web Developer" />
        <meta name="twitter:description" key="twitterDescription" content="On tour with your favorite band or at home coding what you'll never see." />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/media/og/default.jpg" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/" />
        <meta name="description" key="description" content="On tour with your favorite band or at home coding what you'll never see." />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default MyApp
