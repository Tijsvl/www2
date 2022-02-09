import Link from 'next/link';

import classes from './Archive.module.scss';

const Archive = () => {
  return (
    <ul className={classes.archive}>
      <li>
        <Link href='/overview/on-this-day'>On This Day</Link>
      </li>
      <li>
        <Link href='/overview/artists'>All Artists</Link>
      </li>
      <li>
        <Link href='/overview/countries'>All Countries</Link>
      </li>
      <li>
        <Link href='/overview/archive'>Complete Archive</Link>
      </li>
    </ul>
  );
};

export default Archive;
