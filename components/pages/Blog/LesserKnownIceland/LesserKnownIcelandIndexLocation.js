import Head from 'next/head';

import LocationHeader from './Location/LocationHeader';
import classes from './LesserKnownIcelandIndexLocation.module.scss';
import LocationText from './Location/LocationText';
import LocationPhotos from './Location/LocationPhotos';
import LocationBack from './Location/LocationBack';

const LesserKnownIcelandIndexLocation = (props) => {
  const dtl = props.details;

  return (
    <>
      <Head>
        <title>{dtl.title} - Lesser Known Iceland | @lookwhatiso</title>
        <meta name='author' content='@lookwhatiso' />
        <meta property='og:title' content={`${dtl.title} - Lesser Known Iceland | @lookwhatiso`} />
        <meta name='twitter:title' content={`${dtl.title} - Lesser Known Iceland | @lookwhatiso`} />
        <meta property='og:description' content={dtl.text.slice(0, 100)} />
        <meta name='twitter:description' content={dtl.text.slice(0, 100)} />
        <meta name='description' content={dtl.text.slice(0, 100)} />
        <meta
          property='og:image'
          content={`/blogs/lesser-known-iceland/content/${dtl.slug}__${dtl.cover}.jpg`}
        />
        <meta
          name='twitter:image'
          content={`/blogs/lesser-known-iceland/content/${dtl.slug}__${dtl.cover}.jpg`}
        />
        <link rel='canonical' href={`https://tijsvl.net/blog/lesser-known-iceland/${dtl.slug}`} />
        <meta property='og:url' content={`https://tijsvl.net/blog/lesser-known-iceland/${dtl.slug}`} />
        <meta name='twitter:url' content={`https://tijsvl.net/blog/lesser-known-iceland/${dtl.slug}`} />
      </Head>
      <section className={classes.location} id={dtl.slug}>
        <LocationBack />
        <LocationHeader
          title={dtl.title}
          slug={dtl.slug}
          cover={dtl.cover}
          location={dtl.location}
          parking={dtl.parking}
          gravelTime={dtl.gravelTime}
          gravelRoad={dtl.gravelRoad}
          vehicle={dtl.vehicle}
          hikingTime={dtl.hikingTime}
          hikingDistance={dtl.hikingDistance}
          hikingDifficulty={dtl.hikingDifficulty}
          entranceFee={dtl.entranceFee}
          entranceNote={dtl.entranceNote}
        />
        <LocationText text={dtl.text} note={dtl.note} />
        <LocationPhotos title={dtl.title} photos={dtl.photos} />
        <LocationText footnote={dtl.footnote} />
        <LocationBack />
      </section>
    </>
  );
};

export default LesserKnownIcelandIndexLocation;
