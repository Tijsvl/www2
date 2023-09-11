import React from 'react'

import { date } from '../../../helpers/Helpers'
import classes from './Overview.module.scss'

const Artists = (props) => {
  return (
    <>
      <p className={classes.info}>An overview of all photo galleries alphabetized by artist</p>

      <div className={classes.overview}>
        {props.artists.map((artist) => (
          <React.Fragment key={artist.artist + Math.random()}>
            <h2>{`${artist.artist} (${artist.galleries.length})`}</h2>
            <ul>
              {artist.galleries.map((gallery) => (
                <li key={Math.random()} className={classes.row + ' ' + classes.countries}>
                  <a href={'https://tijsvl.com' + gallery.url} target='_blank' rel='noreferrer'>
                    <time dateTime={date(gallery.date, 'time')}>{date(gallery.date, 'short')}</time>
                    {`${gallery.venue}, ${gallery.city}, ${gallery.country}
                    ${gallery.photos > 0 && ' (' + gallery.photos + ' photos)'}`}
                  </a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Artists
