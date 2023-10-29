/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect } from 'react'
import classes from './QuickLinks.module.scss'

// PUBLISDATE HAS ONE EXTRA NUMBER YYYYMMDD#
// THE LAST NUMBER CAN BE USED TO PRIORITIZE IN CASE THERE'S MULTIPLE SHOWS ONE ONE DAY

const VIDEOS = [
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
        {VIDEOS.sort((a, b) => b.publishDate - a.publishDate).map((item) => (
          <li className={`${classes.link} ${classes.video}`} key={item.artist + item.date}>
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
        ))}
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/knocked-loose-20230824">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/knocked-loose-20230824/default-low.jpg" alt="Live Photo of Knocked Loose at The Dome, London 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Knocked Loose</span>
                <span className={classes.detail}>The Dome, London</span>
                <span className={classes.detail}>August 24, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/stick-to-your-guns-20230822">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/stick-to-your-guns-20230822/default-low.jpg" alt="Live Photo of Stick To Your Guns at The Dome, London 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Stick To Your Guns</span>
                <span className={classes.detail}>The Dome, London</span>
                <span className={classes.detail}>August 22, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/scowl-20230813">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/scowl-20230813/default-low.jpg" alt="Live Photo of Scowl at Blue Collar Hotel, Eindhoven 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Scowl</span>
                <span className={classes.detail}>Blue Collar Hotel, Eindhoven</span>
                <span className={classes.detail}>August 13, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/death-before-dishonor-20230812">
            <a>
              <div className={classes.image}>
                <img
                  src="https://www.tijsvl.net/static/galleries/death-before-dishonor-20230812/default-low.jpg"
                  alt="Live Photo of Death Before Dishonor at Tells Bells festival 2023"
                />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Death Before Dishonor</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/scowl-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/scowl-20230812/default-low.jpg" alt="Live Photo of Scowl at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Scowl</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/pennywise-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/pennywise-20230812/default-low.jpg" alt="Live Photo of Pennywise at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Pennywise</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/deez-nuts-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/deez-nuts-20230812/default-low.jpg" alt="Live Photo of Deez Nuts at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Deez Nuts</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/stick-to-your-guns-20230812">
            <a>
              <div className={classes.image}>
                <img
                  src="https://www.tijsvl.net/static/galleries/stick-to-your-guns-20230812/default-low.jpg"
                  alt="Live Photo of Sticky To Your Guns at Tells Bells festival 2023"
                />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Stick To Your Guns</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.gallery}`}>
          <Link href="/gallery/drain-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://www.tijsvl.net/static/galleries/drain-20230812/default-low.jpg" alt="Live Photo of Drain at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Drain</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
                <span className={classes.tag}>Gallery</span>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default QuickLinks
