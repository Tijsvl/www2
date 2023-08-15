/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import classes from './Gallery.module.scss'
import { GALLERIES_INFO } from '../../../pages/gallery'
import { useEffect } from 'react'

const Gallery = ({ gallery, photos }) => {
  useEffect(() => {
    const container = document.querySelector('[data-identifier="container"]')

    container?.setAttribute('full-width', '')

    return () => {
      container?.removeAttribute('full-width')
    }
  }, [])

  const { artist, country, location, city, date, prettyDate } = GALLERIES_INFO.find((g) => g.slug === gallery)

  return (
    <section className={classes.gallery}>
      <h1 className={classes.artist}>{artist}</h1>
      <h2 className={classes.location}>
        {location}, {city}
      </h2>
      <h2 className={classes.location}>
        {city}, {country}
      </h2>
      <h2 className={classes.date}>
        <time>{prettyDate}</time>
      </h2>
      <div>
        <ul>
          {photos.map((photo) => (
            <li key={photo}>
              <Link href={'https://tijsvl.net/static/galleries/drain-20230812/h/' + photo}>
                <a target="_blank" download>
                  <img
                    loading="lazy"
                    srcSet={`${'https://tijsvl.net/static/galleries/drain-20230812/l/' + photo} 600w, ${'https://tijsvl.net/static/galleries/drain-20230812/m/' + photo} 1200w, ${
                      'https://tijsvl.net/static/galleries/drain-20230812/h/' + photo
                    } 2400w`}
                    sizes={`(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px`}
                    src={`https://tijsvl.net/static/galleries/drain-20230812/l/` + photo}
                    alt={artist + ' live at ' + location + ', ' + country + ' on ' + prettyDate}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
