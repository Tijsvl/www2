import Head from 'next/head'

import classes from './ViewVideo.module.scss'

const ViewVideo = (props) => {
  const autoplay = props.autoplay ? 0 : 1 // 1 = autoplay

  return (
    <div>
      <Head>
        <title>
          @tijsvl | {props.artist} - {props.title}
        </title>
        <meta property="og:title" key="ogTitle" content={`@tijsvl | ${props.artist} - ${props.title}`} />
        <meta name="twitter:title" key="twitterTitle" content={`@tijsvl | ${props.artist} - ${props.title}`} />
        <meta property="og:description" key="ogDescription" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta name="twitter:description" key="twitterDescription" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta name="description" key="description" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta property="og:image" key="ogImage" content={`https://tijsvl.com${props.image}`} />
        <meta name="twitter:image" key="twitterImage" content={`https://tijsvl.com${props.image}`} />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/portfolio/videography" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/portfolio/videography" />
        <meta name="twitter:url" key={twitterUrl} content="https://www.tijsvl.com/portfolio/videography" />
      </Head>
      <div className={classes.modalContent} id={props.id}>
        <h3>{props.artist}</h3>
        <h4>{props.title}</h4>
        <br />
        {props.source !== 'local' ? (
          <iframe
            style={{ aspectRatio: props.dimensions, minHeight: '35rem' }}
            src={`https://www.youtube-nocookie.com/embed/${props.source}?autoplay=${autoplay}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; fullscreen"
          ></iframe>
        ) : (
          <video style={{ aspectRatio: props.dimensions }} controls autoPlay={autoplay} poster={props.image}>
            <source src={`/video/${props.slug}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <p className={classes.credits} dangerouslySetInnerHTML={{ __html: props.credits }} />
      </div>
    </div>
  )
}

export default ViewVideo
