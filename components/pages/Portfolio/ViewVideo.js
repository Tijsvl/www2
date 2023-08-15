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
        <meta property="og:title" content={`@tijsvl | ${props.artist} - ${props.title}`} />
        <meta name="twitter:title" content={`@tijsvl | ${props.artist} - ${props.title}`} />
        <meta property="og:description" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta name="twitter:description" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta name="description" content={`${props.artist} - ${props.title} video by @tijsvl`} />
        <meta property="og:image" content={`https://tijsvl.net${props.image}`} />
        <meta name="twitter:image" content={`https://tijsvl.net${props.image}`} />
        <link rel="canonical" href="https://tijsvl.net/portfolio/videography" />
        <meta property="og:url" content="https://tijsvl.net/portfolio/videography" />
        <meta name="twitter:url" content="https://tijsvl.net/portfolio/videography" />
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
