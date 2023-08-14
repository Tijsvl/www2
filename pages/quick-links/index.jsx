import Head from 'next/head'

import QuickLinks from '../../components/pages/QuickLinks/QuickLinks'

const QuickLinksPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | QuickLinks</title>
        <meta property="og:title" content="@tijsvl | QuickLinks" />
        <meta name="twitter:title" content="@tijsvl | QuickLinks" />
        <meta property="og:description" content="Quick Links to current content" />
        <meta name="twitter:description" content="Quick Links to current content" />
        <meta name="description" content="Quick Links to current content" />
        <link rel="canonical" href="https://tijsvl.net/quicklinks" />
        <meta property="og:url" content="https://tijsvl.net/quicklinks" />
        <meta name="twitter:url" content="https://tijsvl.net/quicklinks" />
      </Head>
      <QuickLinks />
    </>
  )
}

export default QuickLinksPage
