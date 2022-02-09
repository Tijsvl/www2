import Image from 'next/image';

import ReactHtmlParser from 'react-html-parser';

import classes from './LocationHeader.module.scss';

const LocationHeader = (props) => {
  let accessible = true;

  const location = (
    <>
      <strong>{props.title}:</strong>{' '}
      <a href={`https://maps.google.com/?q=${props.location}`} target='_blank' rel='noreferrer'>
        {props.location.replace(' ', '').replace(',', ', ')}
      </a>
    </>
  );

  const parking = props.parking != -1 && (
    <>
      &nbsp;{' - '}
      <strong>Parking:</strong>{' '}
      <a href={`https://maps.google.com/?q=${props.parking}`} target='_blank' rel='noreferrer'>
        {props.parking.replace(' ', '').replace(',', ', ')}
      </a>
    </>
  );

  let gravelRoad;
  if (props.gravelRoad == -1) {
    gravelRoad = 'Not accessible.';
    accessible = false;
  } else if (props.gravelRoad == 0) {
    gravelRoad = 'Accessible with any type of vehicle';
  } else {
    gravelRoad = (
      <>
        <strong>Gravel road:</strong> {props.gravelRoad / 1000 + 'km'}
      </>
    );
  }

  const gravelTime = <> (about {props.gravelTime} minutes)</>;

  let hike;
  if (props.hikingDistance == -1) {
    hike = 'Not accessible.';
    accessible = false;
  } else if (props.hikingDistance == 0) {
    hike = 'No hike';
  } else {
    hike = <>{props.hikingDistance / 1000 + 'km'}</>;
  }

  const hikingTime = <> (about {props.hikingTime} minutes)</>;

  let vehicle;
  props.vehicle !== 'any' && props.vehicle != -1 && (vehicle = ' - ' + props.vehicle + ' recommended');

  let difficulty;

  props.hikingDifficulty > 0 &&
    (difficulty = (
      <>
        {' -'}&nbsp; <strong>Difficulty:</strong> {props.hikingDifficulty}/5
      </>
    ));

  let entranceFee;
  if (props.entranceFee == 0) {
    entranceFee = (
      <>
        <strong>Entrance fee:</strong> Free!
      </>
    );
  } else if (props.entranceFee > 0) {
    entranceFee = (
      <>
        <strong>Entrance fee:</strong> {props.entranceFee} ISK
      </>
    );
  }

  return (
    <header className={classes.header}>
      <strong className={classes.decorator}>⌘</strong>
      <h2>{props.title}</h2>
      <div className={classes.headerImage}>
        <Image
          layout='fill'
          src={`/blogs/lesser-known-iceland/content/${props.slug}__${props.cover}.jpg`}
          blurDataURL={`/blogs/lesser-known-iceland/content/${props.slug}__${props.cover}-blur.jpg`}
          placeholder='blur'
          alt={props.title}
          title={props.title}
          objectFit='cover'
        />
      </div>
      <ul className={classes.details}>
        <li>
          <div className={classes.icon}>
            <Image
              layout='fill'
              className={classes.icon}
              src='/blogs/lesser-known-iceland/gps.svg'
              alt={props.title + 'GPS coordinates'}
              title={props.title + 'GPS coordinates'}
            />
          </div>
          {props.location && location}
          {props.parking && parking}
        </li>
        <li>
          <div className={classes.icon}>
            <Image
              layout='fill'
              className={classes.icon}
              src='/blogs/lesser-known-iceland/gravel.svg'
              alt={props.title + 'driving instructions'}
              title={props.title + 'driving instructions'}
            />
          </div>
          {gravelRoad}
          {props.gravelTime > 0 && gravelTime}
          {props.vehicle && vehicle}
        </li>
        <li>
          <div className={classes.icon}>
            <Image
              layout='fill'
              className={classes.icon}
              src='/blogs/lesser-known-iceland/hike.svg'
              alt={props.title + 'hiking instructions'}
              title={props.title + 'hiking instructions'}
            />
          </div>
          {hike}
          {props.hikingTime > 0 && hikingTime}
          {difficulty}
        </li>
        {accessible && (
          <li>
            <div className={classes.icon}>
              <Image
                layout='fill'
                src='/blogs/lesser-known-iceland/money.svg'
                alt={`${props.title} entrance fee`}
                title={`${props.title} entrance fee`}
              />
            </div>
            {entranceFee} {ReactHtmlParser(props.entranceNote)}
          </li>
        )}
      </ul>
    </header>
  );
};

export default LocationHeader;
