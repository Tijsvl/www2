import Head from 'next/head';

import Biography from '../../components/pages/About/Biography';
import List from '../../components/pages/About/List';
import ContactForm from '../../components/pages/Contact/Form';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | About</title>
        <meta property='og:title' content='@tijsvl | About' />
        <meta name='twitter:title' content='@tijsvl | About' />
        <meta
          property='og:description'
          content='Born September 22nd, 1986 in the small but beautiful city of Nijmegen, The Netherlands. Photography is a mostly self-taught skill I aqcuired by shooting shows of local and befriended bands.'
        />
        <meta
          name='twitter:description'
          content='Born September 22nd, 1986 in the small but beautiful city of Nijmegen, The Netherlands. Photography is a mostly self-taught skill I aqcuired by shooting shows of local and befriended bands.'
        />
        <meta
          name='description'
          content='Born September 22nd, 1986 in the small but beautiful city of Nijmegen, The Netherlands. Photography is a mostly self-taught skill I aqcuired by shooting shows of local and befriended bands.'
        />
        <meta property='og:image' content='https://tijsvl.vercel.app/img/about__tijsvl-2000.jpg' />

        <meta name='twitter:image' content='https://tijsvl.vercel.app/img/about__tijsvl-2000.jpg' />
        <link rel='canonical' href='https://tijsvl.net/about' />
        <meta property='og:url' content='https://tijsvl.net/about' />
        <meta name='twitter:url' content='https://tijsvl.net/about' />
      </Head>
      <section>
        <h1>About</h1>
        <Biography />
        <List />
        <ContactForm included={true} />
      </section>
    </>
  );
};

export default AboutPage;
