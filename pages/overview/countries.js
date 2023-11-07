import React from 'react'
import Head from 'next/head'

import Countries from '../../components/pages/Overview/Countries'

const CountriesPage = (props) => {
  return (
    <>
      <Head>
        <title>@tijsvl | All Countries</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | All Countries" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | All Countries" />
        <meta property="og:description" key="ogDescription" content="An overview of all photo galleries sorted by country" />
        <meta name="twitter:description" key="twitterDescription" content="An overview of all photo galleries sorted by country" />
        <meta name="description" key="description" content="An overview of all photo galleries sorted by country" />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__item__deryck-whibley-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/overview/countries" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/overview/countries" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/overview/countries" />
      </Head>
      <section>
        <h1>On This Day</h1>
        <Countries countries={props.countries} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://tijsvl.net/next-api/overview/countries/')
  const data = await res.json()

  return {
    props: {
      countries: data.countries
    }
  }
}

export default CountriesPage
