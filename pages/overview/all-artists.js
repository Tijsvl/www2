import React from 'react'
import Head from 'next/head'

import Artists from '../../components/pages/Overview/Artists'

const ArtistsPage = (props) => {
  return (
    <>
      <Head>
        <title>@tijsvl | All Artists</title>
        <meta property="og:title" content="@tijsvl | All Artists" />
        <meta name="twitter:title" content="@tijsvl | All Artists" />
        <meta property="og:description" content="An overview of all photo galleries of all artists and events" />
        <meta name="twitter:description" content="An overview of all photo galleries of all artists and events" />
        <meta name="description" content="An overview of all photo galleries of all artists and events" />
        <meta property="og:image" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" key="ogImage" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" href="https://www.tijsvl.com/overview/artists" />
        <meta property="og:url" content="https://www.tijsvl.com/overview/artists" />
        <meta name="twitter:url" content="https://www.tijsvl.com/overview/artists" />
      </Head>
      <section>
        <h1>Artists</h1>
        <Artists artists={props.artists} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  // const res = await fetch('https://tijsvl.net/api/artists.json');
  // const res = await fetch('https://tijsvl.net/api/overview.php?artists');
  const res = await fetch('https://tijsvl.net/next-api/overview/artists/')
  const data = await res.json()

  return {
    props: {
      artists: data.artists
    }
  }
}

export default ArtistsPage
