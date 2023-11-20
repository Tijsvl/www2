/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Fragment, useEffect } from 'react'
import classes from './QuickLinks.module.scss'

// PUBLISDATE HAS ONE EXTRA NUMBER YYYYMMDD#
// THE LAST NUMBER CAN BE USED TO PRIORITIZE IN CASE THERE'S MULTIPLE SHOWS ONE ONE DAY

const VIDEOS = [
  {
    tag: 'Video',
    artist: 'The Rumjacks',
    slug: 'the-rumjacks',
    location: 'Melkweg',
    city: 'Amsterdam',
    country: 'The Netherlands',
    date: '20231101',
    publishDate: '20231111',
    url: 'https://www.youtube.com/watch?v=EGOP6n9YsHk'
  },
  {
    tag: 'Video',
    artist: 'Knocked Loose',
    slug: 'knocked-loose',
    location: 'The Dome',
    city: 'London',
    country: 'England',
    date: '20230824',
    publishDate: '202308240',
    url: 'https://www.youtube.com/watch?v=FkoiupXLB2g'
  },
  {
    tag: 'Video',
    artist: 'Stick To Your Guns',
    slug: 'stick-to-your-guns',
    location: 'The Dome',
    city: 'London',
    country: 'England',
    date: '20230822',
    publishDate: '202308220',
    url: 'https://www.youtube.com/watch?v=I7Y17qdnwBw'
  },
  {
    tag: 'Video',
    artist: 'Stick To Your Guns',
    slug: 'stick-to-your-guns',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '202308121',
    url: 'https://www.youtube.com/watch?v=TkK23M94qqw'
  },
  {
    tag: 'Video',
    artist: 'Drain',
    slug: 'drain',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '202308122',
    url: 'https://www.youtube.com/watch?v=gjLWVBWqAv0'
  },
  {
    tag: 'Video',
    artist: 'Pennywise',
    slug: 'pennywise',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '202308123',
    url: 'https://www.youtube.com/watch?v=-Wyx64TXdSU'
  },
  {
    tag: 'Video',
    artist: 'Scowl',
    slug: 'scowl',
    location: 'Blue Collar Hotel',
    city: 'Eindhoven',
    country: 'The Netherlands',
    date: '20230813',
    publishDate: '202308130',
    url: 'https://www.youtube.com/watch?v=QurELo_DBdE'
  }
]

const GALLERIES = [
  {
    tag: 'Gallery',
    artist: 'The Rumjacks',
    slug: 'the-rumjacks',
    location: 'Melkweg',
    city: 'Amsterdam',
    country: 'The Netherlands',
    date: '20231101',
    publishDate: '20231109'
  },
  {
    tag: 'Gallery',
    artist: 'Knocked Loose',
    slug: 'knocked-loose',
    location: 'The Dome',
    city: 'London',
    country: 'England',
    date: '20230824',
    publishDate: '20230824'
  },
  {
    tag: 'Gallery',
    artist: 'Stick To Your Guns',
    slug: 'stick-to-your-guns',
    location: 'The Dome',
    city: 'London',
    country: 'England',
    date: '20230822',
    publishDate: '20230822'
  },
  {
    tag: 'Gallery',
    artist: 'Scowl',
    slug: 'scowl',
    location: 'Blue Collar Hotel',
    city: 'Eindhoven',
    country: 'The Netherlands',
    date: '20230813',
    publishDate: '20230813'
  },
  {
    tag: 'Gallery',
    artist: 'Death Before Dishonor',
    slug: 'death-before-dishonor',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Scowl',
    slug: 'scowl',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Deez Nuts',
    slug: 'deez-nuts',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Pennywise',
    slug: 'pennywise',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Stick To Your Guns',
    slug: 'stick-to-your-guns',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Drain',
    slug: 'drain',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    country: 'Germany',
    date: '20230812',
    publishDate: '20230812'
  },
  {
    tag: 'Gallery',
    artist: 'Corey Taylor',
    slug: 'corey-taylor',
    location: 'Eventim Apollo',
    city: 'London',
    country: 'England',
    date: '20231114',
    publishDate: '20231114'
  },
  {
    tag: 'Gallery',
    artist: 'Oxymorrons',
    slug: 'oxymorrons',
    location: 'Eventim Apollo',
    city: 'London',
    country: 'England',
    date: '20231114',
    publishDate: '20231114'
  },
  ,
  {
    tag: 'Gallery',
    artist: 'Corey Taylor',
    slug: 'corey-taylor',
    location: '013',
    city: 'Tilburg',
    country: 'The Netherlands',
    date: '20231118',
    publishDate: '20231118'
  }
]

const prettyDate = (inputDate) => {
  // Parse the input date string into a JavaScript Date object
  const year = inputDate.substring(0, 4)
  const month = inputDate.substring(4, 6) - 1 // Subtract 1 from the month as it's zero-based
  const day = inputDate.substring(6, 8)
  const date = new Date(year, month, day)

  // Define an array of month names for formatting
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  return formattedDate
}

const QuickLinks = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-identifier="layout-element"]')
    elements.forEach((el) => el.classList.add('displayNone'))
    return () => elements.forEach((el) => el.classList.remove('displayNone'))
  }, [])

  return (
    <>
      <h1 className={classes.title}>Quick Links</h1>
      <ul className={classes.quicklinks}>
        {[...VIDEOS, ...GALLERIES]
          .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
          .map((item) => (
            <Fragment key={item.artist + item.date + item.tag}>
              {item.tag === 'Video' ? (
                <li className={`${classes.link} ${classes.video}`}>
                  <a href={item.url}>
                    <div className={classes.image}>
                      <img
                        src={`https://www.tijsvl.net/static/thumbnails/${item.slug}-${item.date}-low.jpg`}
                        alt={`Live Photo of ${item.artist} at ${item.location}, ${item.city} ${item.date.slice(0, 4)}`}
                      />
                    </div>
                    <div className={classes.info}>
                      <span className={classes.artist}>{item.artist}</span>
                      <span className={classes.detail}>{item.location}</span>
                      <span className={classes.detail}>{prettyDate(item.date)}</span>
                      <span className={classes.tag}>{item.tag}</span>
                    </div>
                  </a>
                </li>
              ) : (
                <li className={`${classes.link} ${classes.gallery}`}>
                  <Link href={`/gallery/${item.slug}-${item.date}`}>
                    <a>
                      <div className={classes.image}>
                        <img
                          src={`https://www.tijsvl.net/static/galleries/${item.slug}-${item.date}/default-low.jpg`}
                          alt={`Live Photo of ${item.artist} at ${item.venue}, ${item.city} ${prettyDate(item.date)}`}
                        />
                      </div>
                      <div className={classes.info}>
                        <span className={classes.artist}>{item.artist}</span>
                        <span className={classes.detail}>
                          {item.location}, {item.city}
                        </span>
                        <span className={classes.detail}>{prettyDate(item.date)}</span>
                        <span className={classes.tag}>{item.tag}</span>
                      </div>
                    </a>
                  </Link>
                </li>
              )}
            </Fragment>
          ))}
      </ul>
    </>
  )
}

export default QuickLinks
