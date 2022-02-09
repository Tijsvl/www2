import React from 'react';
import Head from 'next/head';

import Countries from '../../components/pages/Overview/Countries';

const CountriesPage = (props) => {
  return (
    <>
      <Head>
        <title>@tijsvl | All Countries</title>
        <meta property="og:title" content="@tijsvl | All Countries" />
        <meta name="twitter:title" content="@tijsvl | All Countries" />
        <meta
          property="og:description"
          content="An overview of all photo galleries sorted by country"
        />
        <meta
          name="twitter:description"
          content="An overview of all photo galleries sorted by country"
        />
        <meta
          name="description"
          content="An overview of all photo galleries sorted by country"
        />
        <meta
          property="og:image"
          content="https://tijsvl.net/img/prints__buy__noodles-middlefinger-1000.jpg"
        />
        <meta
          property="og:image:alt"
          content="https://tijsvl.net/img/prints__item__deryck-whibley-1000.jpg"
        />
        <meta
          name="twitter:image"
          content="https://tijsvl.net/img/prints__buy__noodles-middlefinger-1000.jpg"
        />
        <link rel="canonical" href="https://tijsvl.net/overview/countries" />
        <meta
          property="og:url"
          content="https://tijsvl.net/overview/countries"
        />
        <meta
          name="twitter:url"
          content="https://tijsvl.net/overview/countries"
        />
      </Head>
      <section>
        <h1>On This Day</h1>
        <Countries countries={props.countries} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://tijsvl.net/next-api/overview/countries/');
  const data = await res.json();

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default CountriesPage;
