import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import classes from './Music.module.scss';

const MusicNav = (props) => {
  useEffect(() => {
    const random = '/portfolio/music/' + Math.floor(Math.random() * 4 + 1);
    Router.pathname == '/portfolio/music' && Router.push(`${random}`, `${random}`, { shallow: false });
  });

  const isActive = (route) => (props.page == route ? `${classes.active}` : null);

  return (
    <div suppressHydrationWarning={true}>
      {process.browser && window.location.pathname !== '/' && (
        <>
          <h1>Music Photography</h1>
          <ul className={classes.nav} aria-label='secondary'>
            <li>
              <Link href='/portfolio/music/1'>
                <a className={isActive(1)}>1</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio/music/2'>
                <a className={isActive(2)}>2</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio/music/3'>
                <a className={isActive(3)}>3</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio/music/4'>
                <a className={isActive(4)}>4</a>
              </Link>
            </li>
          </ul>
        </>
      )}
      {props.children}
    </div>
  );
};

export default MusicNav;
