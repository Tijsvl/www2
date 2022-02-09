import { useState, useEffect } from 'react';

import classes from './Theme.module.scss';

const Theme = () => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];

    if (localStorage.getItem('theme') === 'dark') {
      html.setAttribute('data-theme', 'prefers-dark');
      html.classList.add('dark');
      html.classList.remove('light');
      setIsLight(false);
    } else {
      html.removeAttribute('data-theme');
      html.classList.add('light');
      html.classList.remove('dark');
      setIsLight(true);
      localStorage.setItem('theme', 'light');
    }
  });

  const onClickHandler = () => {
    if (isLight) {
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <div>
      <button
        onClick={onClickHandler}
        className={
          classes.colorScheme + ' ' + (isLight ? classes.light : classes.dark)
        }
      >
        <div className={classes.outer}>
          <div className={classes.inner}></div>
        </div>
      </button>
    </div>
  );
};

export default Theme;
