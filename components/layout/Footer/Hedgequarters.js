import Link from 'next/link';

import classes from './Hedgequarters.module.scss';

const Hedgequarters = () => {
  return (
    <ul className={classes.hedgequarters}>
      <li>
        <Link href='/hedgequarters'>*!</Link>
      </li>
    </ul>
  );
};

export default Hedgequarters;
