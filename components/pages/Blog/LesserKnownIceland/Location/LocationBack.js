import Link from 'next/link';

import classes from './LocationBack.module.scss';

const LocationBack = () => {
  return (
    <h3 className={classes.back}>
      <Link href='/blog/lesser-known-iceland#index'>Back to Index</Link>
    </h3>
  );
};

export default LocationBack;
