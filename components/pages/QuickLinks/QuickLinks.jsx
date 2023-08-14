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
          <a href="/gallery/scowl">
            <div className={classes.image}>
              <img src="https://tijsvl.net/static/drain-20230812/default-low.jpg" alt="Live Photo" />
            </div>
            <div className={classes.info}>
              <span className={classes.artist}>Drain</span>
              <span className={classes.detail}>Tells Bells Festival</span>
              <span className={classes.detail}>August 14, 2023</span>
            </div>
            <span className={classes.tag}>Gallery</span>
          </a>
        </li>
      </ul>
    </>
  )
}

export default QuickLinks
