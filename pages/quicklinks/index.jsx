import Head from 'next/head'

import QuickLinks from '../../components/pages/QuickLinks/QuickLinks'

const QuickLinksPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Quick Links</title>
        <meta property="og:title" key="ogTitle" content="Quick Links" />
        <meta name="twitter:title" key="twitterTitle" content="Quick Links" />
        <meta property="og:description" key="ogDescription" content="Quick Links to current content on tijsvl.net" />
        <meta name="twitter:description" key="twitterDescription" content="Quick Links to current content on tijsvl.net" />
        <meta name="description" key="description" content="Quick Links to current content on tijsvl.net" />
        <meta property="og:image" key="ogImage" content="https://tijsvl.net/img/og_default.jpg" />
        <meta name="twitter:image" key="twitterImage" content="https://tijsvl.net/img/og_default.jpg" />
        <link rel="canonical" key="canonical" href="https://tijsvl.net/quick-links" />
        <meta property="og:url" key="ogUrl" content="https://tijsvl.net/quick-links" />
        <meta name="twitter:url" key={twitterUrl} content="https://tijsvl.net/quick-links" />
      </Head>
      <QuickLinks />
    </>
  )
}

export default QuickLinksPage
