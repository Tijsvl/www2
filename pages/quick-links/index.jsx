import Head from 'next/head'

import QuickLinks from '../../components/pages/QuickLinks/QuickLinks'

const QuickLinksPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Quick Links</title>
        <meta property="og:title" content="Quick Links" />
        <meta name="twitter:title" content="Quick Links" />
        <meta property="og:description" content="Quick Links to current content on tijsvl.net" />
        <meta name="twitter:description" content="Quick Links to current content on tijsvl.net" />
        <meta name="description" content="Quick Links to current content on tijsvl.net" />
        <meta property="og:image" content="https://tijsvl.net/img/og_default.jpg" />
        <meta name="twitter:image" content="https://tijsvl.net/img/og_default.jpg" />
        <link rel="canonical" href="https://tijsvl.net/quick-links" />
        <meta property="og:url" content="https://tijsvl.net/quick-links" />
        <meta name="twitter:url" content="https://tijsvl.net/quick-links" />
      </Head>
      <QuickLinks />
    </>
  )
}

export default QuickLinksPage
