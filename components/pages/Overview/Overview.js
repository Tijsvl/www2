import Link from 'next/link'

import classes from './Overview.module.scss'

const Overview = () => {
  return (
    <section>
      <h1>Overview</h1>
      <p className={classes.info}>An overview of all photo galleries</p>
      <div className={classes.overview + ' ' + classes.index}>
        <ul className={classes.main}>
          <li>
            <h2>
              <Link href='/overview/on-this-day'>On This Day</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href='/overview/artists'>All Artists</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href='/overview/countries'>Countries</Link>
            </h2>
          </li>
          <li>
            <h2>
              <a href='https://tijsvl.net/archive' target='_blank' rel='noreferrer'>
                Archive
              </a>
            </h2>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Overview
