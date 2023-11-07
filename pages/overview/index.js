import Head from 'next/head'

import Overview from '../../components/pages/Overview/Overview'

const OverviewPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Overview</title>
        <meta property="og:title" content="@tijsvl | Overview" />
        <meta name="twitter:title" content="@tijsvl | Overview" />
        <meta property="og:description" content="An overview of past concert and event photo galleries" />
        <meta name="twitter:description" content="An overview of past concert and event photo galleries" />
        <meta name="description" content="An overview of past concert and event photo galleries" />
        <meta property="og:image" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" key="ogImage" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__item__deryck-whibley-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" href="https://www.tijsvl.com/overview" />
        <meta property="og:url" content="https://www.tijsvl.com/overview" />
        <meta name="twitter:url" content="https://www.tijsvl.com/overview" />
      </Head>
      <Overview />
    </>
  )
}

export default OverviewPage
