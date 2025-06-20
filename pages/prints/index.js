import Head from 'next/head'

import useWindowSize from '../../hooks/useWindowSize'
import Mockups from '../../components/pages/Prints/Mockups'
import Note from '../../components/pages/Prints/Note'
import PrintItem from '../../components/pages/Prints/PrintItem'
import PromoBanner from '../../components/pages/Prints/PromoBanner'

const PrinsPage = () => {
  let { width } = useWindowSize()
  width = width ? width : 1000
  return (
    <>
      <Head>
        <title>@tijsvl | Prints</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | Prints" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | Prints" />
        <meta property="og:description" key="ogDescription" content="Order your own photo prints by @tijsvl" />
        <meta name="twitter:description" key="twitterDescription" content="Order your own photo prints by @tijsvl" />
        <meta name="description" key="description" content="Order your own photo prints by @tijsvl" />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/p/m/macklemore__august-17-2019-macklemore-st-polten-austria___K7A9724-2000.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/p/m/sum-41__january-22-2020-sum-41-amsterdam-the-netherlands__3R7A7252-2000.jpg" />
        <meta
          property="og:image:alt"
          content="https://www.tijsvl.com/img/p/m/offspring__july-9-2018-the-offspring-fete-du-bruit-landerneau-france__3R7A9815-2000.jpg"
          key="ogImageAltB"
        />
        <meta
          property="og:image:alt"
          content="https://www.tijsvl.com/img/p/m/bullet-for-my-valentine__august-11-2019-bullet-for-my-valentine-eschwege-germany___K7A3790-2000.jpg"
          key="ogImageAltC"
        />
        <meta name="twitter:image" key="twitterImage" content="/img/p/m/evergreen-terrace__august-10-2018-evergreen-terrace-villmar-germany__3R7A2713-2000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/prints" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/prints" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/prints" />
      </Head>
      <section>
        <h1>Prints</h1>
        <PromoBanner />
        {width && width >= 800 && <Mockups position="top" />}
        <PrintItem />
        <Note />
        <Mockups position="bottom" />
      </section>
    </>
  )
}

export default PrinsPage
