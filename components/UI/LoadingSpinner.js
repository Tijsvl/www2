import Image from 'next/image';

import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = (props) => {
  const message = props.message ? props.message : 'Loading...';

  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loading + ' ' + ' theme-light'}>
        <Image priority='true' layout='fill' src='/img/style/logo.gif' alt={message} title={message} />
      </div>
      {/* <div className={classes.loading + ' ' + ' theme-dark'}>
        <Image priority='true' layout='fill' src='/img/style/logo-dark.gif' alt={message} title={message} />
      </div> */}
      <div className={classes.loadingMessage}>{message}</div>
    </div>
  );
};

export default LoadingSpinner;
