import Head from 'next/head'
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
      <Head>
        <title>@tijsvl | Quick Links</title>
        <meta property="og:title" content="Quick Links" />
        <meta name="twitter:title" content="Quick Links" />
        <meta property="og:description" content="Quick Links to current content on tijsvl.net" />
        <meta name="twitter:description" content="Quick Links to current content on tijsvl.net" />
        <meta name="description" content="Quick Links to current content on tijsvl.net" />
        <meta property="og:image" content="https://tijsvl.net/img/og_default.jpg" />
        <meta name="twitter:image" content="https://tijsvl.net/img/og_default.jpg" />
        <link rel="canonical" href="https://tijsvl.net/quick-links" />
        <meta property="og:url" content="https://tijsvl.net/quick-links" />
        <meta name="twitter:url" content="https://tijsvl.net/quick-links" />
      </Head>
      <h1 className={classes.title}>Quick Links</h1>
      <ul className={classes.quicklinks}>
        <li className={classes.gallery}>
          <Link href="/gallery/drain-20230812">
            <div className={classes.image}>
              <img src="https://tijsvl.net/static/galleries/drain-20230812/default-low.jpg" alt="Live Photo" />
            </div>
            <div className={classes.info}>
              <span className={classes.artist}>Drain</span>
              <span className={classes.detail}>Tells Bells Festival</span>
              <span className={classes.detail}>August 14, 2023</span>
            </div>
            <span className={classes.tag}>Gallery</span>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default QuickLinks
