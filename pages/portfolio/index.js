import Head from 'next/head'

import PortfolioItem from '../../components/pages/Portfolio/PortfolioItem'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Portfolio</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | Portfolio" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | Portfolio" />
        <meta property="og:description" key="ogDescription" content="Portfolio of @tijsvl" />
        <meta name="twitter:description" key="twitterDescription" content="Portfolio of @tijsvl" />
        <meta name="description" key="description" content="Portfolio of @tijsvl" />
        <meta property="og:image" key="ogImage" content="/portfolio__music-photography-2000.jpg" />
        <meta property="og:image:alt" content="/portfolio__music-sports-2000.jpg" key="ogImageAlt" />
        <meta property="og:image:alt" content="/portfolio__music-videography-2000.jpg" key="ogImageAltB" />
        <meta property="og:image:alt" content="/portfolio__music-world-2000.jpg" key="ogImageAltC" />
        <meta property="og:image:alt" content="/portfolio__music-developer-2000.jpg" key="ogImageAltD" />
        <meta name="twitter:image" key="twitterImage" content="/portfolio__music-photography-2000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/portfolio/music" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/portfolio/music" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/portfolio/music" />
      </Head>

      <section>
        <h1>Portfolio</h1>

        <PortfolioItem title="Music Photography" page="music" image="portfolio__music-photography" position="50% 65%" firstPage="1" />

        <PortfolioItem title="Sports Photography" page="sports" image="portfolio__sports-photography" position="50% 15%" />

        <PortfolioItem title="World Photography" page="world" image="portfolio__world-photography" position="50% 35%" />

        <PortfolioItem title="Videography" page="videography" image="portfolio__videography" position="50% 60%" />

        <PortfolioItem title="Web Developer" page="webdeveloper" image="portfolio__webdev" position="50% 50%" />
      </section>
    </>
  )
}

export default PortfolioPage
