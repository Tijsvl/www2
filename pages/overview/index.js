import Head from 'next/head'

import Overview from '../../components/pages/Overview/Overview'

const OverviewPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Overview</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | Overview" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | Overview" />
        <meta property="og:description" key="ogDescription" content="An overview of past concert and event photo galleries" />
        <meta name="twitter:description" key="twitterDescription" content="An overview of past concert and event photo galleries" />
        <meta name="description" key="description" content="An overview of past concert and event photo galleries" />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__item__deryck-whibley-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/overview" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/overview" />
        <meta name="twitter:url" key={twitterUrl} content="https://www.tijsvl.com/overview" />
      </Head>
      <Overview />
    </>
  )
}

export default OverviewPage
