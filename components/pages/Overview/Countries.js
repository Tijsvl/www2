import React from 'react'

import { date } from '../../../helpers/Helpers'
import classes from './Overview.module.scss'

const Countries = (props) => {
  return (
    <>
      <p className={classes.info}>An overview of all photo galleries alphabetized by country</p>

      <div className={classes.overview}>
        {
          <>
            <ul>
              {props.countries.length <= 0 ? (
                <li>No shows found.</li>
              ) : (
                props.countries.map((country) => (
                  <React.Fragment key={country.country + Math.random()}>
                    <h2>{`${country.country} (${country.galleries.length})`}</h2>
                    <ul>
                      {country.galleries.map((gallery) => (
                        <li key={Math.random()} className={classes.row + ' ' + classes.countries}>
                          <a href={'https://tijsvl.com' + gallery.url} target='_blank' rel='noreferrer'>
                            <time dateTime={date(gallery.date, 'time')}>{date(gallery.date, 'short')}</time>
                            <strong>{gallery.artist}</strong>
                            {` @ ${gallery.venue}, ${gallery.city} ${gallery.photos > 0 && '(' + gallery.photos + ' photos)'}`}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))
              )}
            </ul>
          </>
        }
      </div>
    </>
  )
}

export default Countries
