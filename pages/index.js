import { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

import LoadingSpinner from '../components/UI/LoadingSpinner'
import MusicPage from './portfolio/music/4'

const Index = () => {
  // useEffect(() => {
  //   const random = '/portfolio/music/' + Math.floor(Math.random() * 4)
  //   Router.pathname == '/' && Router.push(`${random}`, '/', { shallow: false })
  // })

  return (
    <>
      <Head>
        <title>@tijsvl | Event Photography and Web Developer</title>
        <meta property='og:title' content='@tijsvl | Event Photography and Web Developer' />
        <meta name='twitter:title' content='@tijsvl | Event Photography and Web Developer' />
        <meta property='og:description' content="On tour with your favorite band or at home coding what you'll never see." />
        <meta name='twitter:description' content="On tour with your favorite band or at home coding what you'll never see." />
        <meta name='description' content="On tour with your favorite band or at home coding what you'll never see." />
        <meta property='og:image' content='/img/p/m/macklemore__august-17-2019-macklemore-st-polten-austria___K7A9724-2000.jpg' />
        <meta property='og:image:alt' content='/img/p/m/sum-41__january-22-2020-sum-41-amsterdam-the-netherlands__3R7A7252-2000.jpg' />
        <meta property='og:image:alt' content='/img/p/m/offspring__july-9-2018-the-offspring-fete-du-bruit-landerneau-france__3R7A9815-2000.jpg' />
        <meta property='og:image:alt' content='/img/p/m/bullet-for-my-valentine__august-11-2019-bullet-for-my-valentine-eschwege-germany___K7A3790-2000.jpg' />
        <meta name='twitter:image' content='/img/p/m/evergreen-terrace__august-10-2018-evergreen-terrace-villmar-germany__3R7A2713-2000.jpg' />
        <link rel='canonical' href='https://www.tijsvl.com/portfolio/music' />
        <meta property='og:url' content='https://www.tijsvl.com/portfolio/music' />
        <meta name='twitter:url' content='https://www.tijsvl.com/portfolio/music' />
        <meta name='facebook-domain-verification' content='2wrx1fif0w7nezmgf7s9cm4qsfdzhm' />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{page_path: window.location.pathname,});`
          }}
        />
      </Head>
      <MusicPage />
    </>
  )
}

export default Index
