/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect } from 'react'
import classes from './QuickLinks.module.scss'

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
        <li className={classes.gallery}>
          <Link href="/gallery/knocked-loose-20230824">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/knocked-loose-20230824/default-low.jpg" alt="Live Photo of Knocked Loose at The Dome, London 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Knocked Loose</span>
                <span className={classes.detail}>The Dome, London</span>
                <span className={classes.detail}>August 24, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/stick-to-your-guns-20230822">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/stick-to-your-guns-20230822/default-low.jpg" alt="Live Photo of Stick To Your Guns at The Dome, London 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Stick To Your Guns</span>
                <span className={classes.detail}>The Dome, London</span>
                <span className={classes.detail}>August 22, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/scowl-20230813">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/scowl-20230813/default-low.jpg" alt="Live Photo of Scowl at Blue Collar Hotel, Eindhoven 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Scowl</span>
                <span className={classes.detail}>Blue Collar Hotel, Eindhoven</span>
                <span className={classes.detail}>August 13, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/death-before-dishonor-20230812">
            <a>
              <div className={classes.image}>
                <img
                  src="https://tijsvl.net/static/galleries/death-before-dishonor-20230812/default-low.jpg"
                  alt="Live Photo of Death Before Dishonor at Tells Bells festival 2023"
                />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Death Before Dishonor</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/scowl-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/scowl-20230812/default-low.jpg" alt="Live Photo of Scowl at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Scowl</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/pennywise-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/pennywise-20230812/default-low.jpg" alt="Live Photo of Pennywise at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Pennywise</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/deez-nuts-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/deez-nuts-20230812/default-low.jpg" alt="Live Photo of Deez Nuts at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Deez Nuts</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/stick-to-your-guns-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/stick-to-your-guns-20230812/default-low.jpg" alt="Live Photo of Sticky To Your Guns at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Stick To Your Guns</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
        <li className={classes.gallery}>
          <Link href="/gallery/drain-20230812">
            <a>
              <div className={classes.image}>
                <img src="https://tijsvl.net/static/galleries/drain-20230812/default-low.jpg" alt="Live Photo of Drain at Tells Bells festival 2023" />
              </div>
              <div className={classes.info}>
                <span className={classes.artist}>Drain</span>
                <span className={classes.detail}>Tells Bells Festival</span>
                <span className={classes.detail}>August 12, 2023</span>
              </div>
              <span className={classes.tag}>Gallery</span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default QuickLinks
