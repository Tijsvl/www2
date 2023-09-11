import Head from 'next/head'

import QuickLinks from '../../components/pages/QuickLinks/QuickLinks'

const QuickLinksPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Quick Links</title>
        <meta property='og:title' content='Quick Links' />
        <meta name='twitter:title' content='Quick Links' />
        <meta property='og:description' content='Quick Links to current content on tijsvl.com' />
        <meta name='twitter:description' content='Quick Links to current content on tijsvl.com' />
        <meta name='description' content='Quick Links to current content on tijsvl.com' />
        <meta property='og:image' content='https://www.tijsvl.com/img/og_default.jpg' />
        <meta name='twitter:image' content='https://www.tijsvl.com/img/og_default.jpg' />
        <link rel='canonical' href='https://www.tijsvl.com/quick-links' />
        <meta property='og:url' content='https://www.tijsvl.com/quick-links' />
        <meta name='twitter:url' content='https://www.tijsvl.com/quick-links' />
      </Head>
      <QuickLinks />
    </>
  )
}

export default QuickLinksPage
