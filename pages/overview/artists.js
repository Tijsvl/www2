import React from 'react'
import Head from 'next/head'

import Artists from '../../components/pages/Overview/Artists'

const ArtistsPage = (props) => {
  return (
    <>
      <Head>
        <title>@tijsvl | All Artists</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | All Artists" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | All Artists" />
        <meta property="og:description" key="ogDescription" content="An overview of all photo galleries of all artists and events" />
        <meta name="twitter:description" key="twitterDescription" content="An overview of all photo galleries of all artists and events" />
        <meta name="description" key="description" content="An overview of all photo galleries of all artists and events" />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/overview/artists" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/overview/artists" />
        <meta name="twitter:url" key={twitterUrl} content="https://www.tijsvl.com/overview/artists" />
      </Head>
      <section>
        <h1>Artists</h1>
        <Artists artists={props.artists} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://tijsvl.net/next-api/overview/artists/')
  const data = await res.json()

  return {
    props: {
      artists: data.artists
    }
  }
}

export default ArtistsPage
