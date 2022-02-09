import React from 'react';

import { date } from '../../../helpers/Helpers';
import classes from './Overview.module.scss';

const OnThisDayShows = (props) => {
  return (
    <>
      <h2>Shows</h2>
      <ul>
        {props.shows.length <= 0 ? (
          <li>No shows found for today.</li>
        ) : (
          props.shows.map((show) => (
            <li key={show.artist + show.date} className={classes.row}>
              <a
                href={'https://tijsvl.net' + show.url}
                target="_blank"
                rel="noreferrer"
              >
                <time dateTime={date(show.date, 'time')}>
                  {date(show.date, 'year')}
                </time>
                <strong>{show.artist}</strong>
                {` @ ${show.venue},  ${show.city}, ${show.country} (${
                  show.photos > 0 ? show.photos : 0
                } photos)`}
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default OnThisDayShows;
