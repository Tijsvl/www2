import React from 'react';

import classes from './Overview.module.scss';

const OnThisDay = (props) => {
  return (
    <>
      <p className={classes.info}>{props.children[0]}</p>
      <div className={classes.overview}>
        {props.children[1]}
        {props.children[2]}
      </div>
    </>
  );
};

export default OnThisDay;
