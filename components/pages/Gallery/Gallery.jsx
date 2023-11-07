/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import classes from './Gallery.module.scss'
import { GALLERIES_INFO } from '../../../pages/gallery'
import { useEffect } from 'react'

const Gallery = ({ gallery, photos }) => {
  useEffect(() => {
    const container = document.querySelector('[data-identifier="container"]')
    container?.setAttribute('full-width', '')

    return () => container?.removeAttribute('full-width')
  }, [])

  const { artist, country, location, city, date, prettyDate, slug } = GALLERIES_INFO.find((g) => g.slug === gallery)

  const title = `${artist} / ${location}, ${city}, ${country}`

  return (
    <>
      <Head>
        <title>@tijsvl | {title}</title>
        <meta property="og:title" content={`@tijsvl | ${title}`} />
        <meta name="twitter:title" content={`@tijsvl | ${title}`} />
        <meta property="og:description" content={`Full gallery of ${title}`} />
        <meta name="twitter:description" content={`Full gallery of ${title}`} />
        <meta name="description" content={`Full gallery of ${title}`} />
        <meta property="og:image" content={`https://www.tijsvl.net/static/galleries/${slug}/default-high.jpg`} key="ogImage" />
        <meta name="twitter:image" content={`https://www.tijsvl.net/static/galleries/${slug}/default-high.jpg`} />
        <link rel="canonical" href={`https://www.tijsvl.com/gallery/${slug}`} />
        <meta property="og:url" content={`https://www.tijsvl.com/gallery/${slug}`} />
        <meta name="twitter:url" content={`https://www.tijsvl.com/gallery/${slug}`} />
      </Head>
      <article className={classes.gallery}>
        <h1>
          <span class={classes.artist}>{artist}</span>
          <span class={classes.venue}>
            {location}, {city}, {country}
          </span>
          <time class={classes.date}>{prettyDate}</time>
        </h1>

        <div>
          <ul>
            {photos.map((photo) => (
              <li key={photo}>
                {/* https://tijsvl.net/static/galleries/download.php?gallery=${gallery}&image=${photo} */}
                <Link href={`https://tijsvl.net/static/galleries/${gallery}/h/${photo}`}>
                  <a target="_blank" download>
                    <img
                      loading="lazy"
                      srcSet={`${`https://tijsvl.net/static/galleries/${gallery}/l/${photo}`} 600w, ${`https://tijsvl.net/static/galleries/${gallery}/m/${photo}`} 1200w, ${`https://tijsvl.net/static/galleries/${gallery}/h/${photo}`} 2400w`}
                      sizes={`(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px`}
                      src={`https://tijsvl.net/static/galleries/${gallery}/l/${photo}`}
                      alt={artist + ' live at ' + location + ', ' + country + ' on ' + prettyDate}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  )
}

export default Gallery
