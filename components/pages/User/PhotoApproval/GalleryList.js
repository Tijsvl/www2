import { useRouter } from 'next/router'
import Link from 'next/link'

import { date } from '../../../../helpers/Helpers'
import classes from './GalleryList.module.scss'

const GalleryList = (props) => {
  const router = useRouter()

  return (
    <div className={classes.overview} suppressHydrationWarning={true}>
      <h2>Galleries</h2>
      <h3>{console.log(props.isLoggedIn)}</h3>
      <ul>
        {props.galleries.length <= 0 ? (
          <li>No shows found for today.</li>
        ) : (
          props.galleries.map((show) => (
            <li key={show.date} className={classes.row + ' ' + classes.approval}>
              <Link href={`${router.pathname}/${show.id}`}>
                <a title={show.venue}>
                  <time dateTime={date(show.date, 'time')}>{date(show.date, 'short-not-year')}</time>
                  <strong>{show.artist}</strong> @{' '}
                  <span className={classes.small} data-screen='small'>
                    {show.venue},{' '}
                  </span>
                  {`${show.city}, ${show.country}`}
                  {show.processed ? (
                    <span data-status='ready'>Ready</span>
                  ) : (
                    <span data-status='new'>Pending</span>
                  )}
                </a>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default GalleryList
