import Head from 'next/head'

import PortfolioItem from '../../components/pages/Portfolio/PortfolioItem'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Portfolio</title>
        <meta property='og:title' content='@tijsvl | Portfolio' />
        <meta name='twitter:title' content='@tijsvl | Portfolio' />
        <meta property='og:description' content='Portfolio of @tijsvl' />
        <meta name='twitter:description' content='Portfolio of @tijsvl' />
        <meta name='description' content='Portfolio of @tijsvl' />
        <meta property='og:image' content='/portfolio__music-photography-2000.jpg' />
        <meta property='og:image:alt' content='/portfolio__music-sports-2000.jpg' />
        <meta property='og:image:alt' content='/portfolio__music-videography-2000.jpg' />
        <meta property='og:image:alt' content='/portfolio__music-world-2000.jpg' />
        <meta property='og:image:alt' content='/portfolio__music-developer-2000.jpg' />
        <meta name='twitter:image' content='/portfolio__music-photography-2000.jpg' />
        <link rel='canonical' href='https://www.tijsvl.com/portfolio/music' />
        <meta property='og:url' content='https://www.tijsvl.com/portfolio/music' />
        <meta name='twitter:url' content='https://www.tijsvl.com/portfolio/music' />
      </Head>

      <section>
        <h1>Portfolio</h1>

        <PortfolioItem title='Music Photography' page='music' image='portfolio__music-photography' position='50% 65%' firstPage='1' />

        <PortfolioItem title='Sports Photography' page='sports' image='portfolio__sports-photography' position='50% 15%' />

        <PortfolioItem title='World Photography' page='world' image='portfolio__world-photography' position='50% 35%' />

        <PortfolioItem title='Videography' page='videography' image='portfolio__videography' position='50% 60%' />

        <PortfolioItem title='Web Developer' page='webdeveloper' image='portfolio__webdev' position='50% 50%' />
      </section>
    </>
  )
}

export default PortfolioPage
