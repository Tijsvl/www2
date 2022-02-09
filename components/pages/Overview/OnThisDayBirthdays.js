import React from 'react';

import { date } from '../../../helpers/Helpers';
import classes from './Overview.module.scss';

const OnThisDayBirthdays = (props) => {
  return (
    <>
      <h2>Birthdays</h2>
      <ul>
        {props.birthdays.length <= 0 ? (
          <li>No birthdays today.</li>
        ) : (
          props.birthdays.map((birthday) => (
            <li key={birthday.date + birthday.name} className={classes.row}>
              <a href={birthday.url} target="_blank" rel="noreferrer">
                <time dateTime={date(birthday.date, 'time')}>
                  {date(birthday.date, 'year')}
                </time>
                <strong>{birthday.name}</strong> of{' '}
                <strong>{birthday.artist}</strong>
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default OnThisDayBirthdays;
