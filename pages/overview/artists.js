import React from 'react';
import Head from 'next/head';

import Artists from '../../components/pages/Overview/Artists';

const ArtistsPage = (props) => {
  return (
    <>
      <Head>
        <title>@tijsvl | All Artists</title>
        <meta property="og:title" content="@tijsvl | All Artists" />
        <meta name="twitter:title" content="@tijsvl | All Artists" />
        <meta
          property="og:description"
          content="An overview of all photo galleries of all artists and events"
        />
        <meta
          name="twitter:description"
          content="An overview of all photo galleries of all artists and events"
        />
        <meta
          name="description"
          content="An overview of all photo galleries of all artists and events"
        />
        <meta
          property="og:image"
          content="https://tijsvl.net/img/prints__buy__noodles-middlefinger-1000.jpg"
        />
        <meta
          property="og:image:alt"
          content="https://tijsvl.net/img/prints__buy__noodles-middlefinger-1000.jpg"
        />
        <meta
          name="twitter:image"
          content="https://tijsvl.net/img/prints__buy__noodles-middlefinger-1000.jpg"
        />
        <link rel="canonical" href="https://tijsvl.net/overview/artists" />
        <meta property="og:url" content="https://tijsvl.net/overview/artists" />
        <meta
          name="twitter:url"
          content="https://tijsvl.net/overview/artists"
        />
      </Head>
      <section>
        <h1>Artists</h1>
        <Artists artists={props.artists} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://tijsvl.net/next-api/overview/artists/');
  const data = await res.json();

  return {
    props: {
      artists: data.artists
    }
  };
}

export default ArtistsPage;
