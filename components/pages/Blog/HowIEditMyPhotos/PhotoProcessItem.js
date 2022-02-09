import Image from 'next/image';
import { ComparisonSlider } from 'react-comparison-slider';
import ReactHtmlParser from 'react-html-parser';

import classes from './PhotoProcessItem.module.scss';

const PhotoProcessItem = (props) => {
  const before = `/blogs/how-i-edit-my-photos/content/${props.slug}-before-1000.jpg`;
  const after = `/blogs/how-i-edit-my-photos/content/${props.slug}-after-1000.jpg`;

  return (
    <div className={classes.item}>
      <h2>{props.title}</h2>
      <div className={classes.compare}>
        <ComparisonSlider
          defaultValue={50}
          itemOne={
            <Image
              layout='responsive'
              width='50rem'
              height='50rem'
              title={props.title}
              alt={props.title}
              src={before}
            />
          }
          itemTwo={
            <Image
              layout='responsive'
              width='50rem'
              height='50rem'
              title={props.title}
              alt={props.title}
              src={after}
            />
          }
          aspectRatio={props.dimensions}
          orientation={props.orientation}
          handleBefore={
            <div
              className={props.orientation === 'vertical' ? classes.handleBeforeV : classes.handleBeforeH}
            ></div>
          }
          handleAfter={
            <div
              className={props.orientation === 'vertical' ? classes.handleAfterV : classes.handleAfterH}
            ></div>
          }
        />
      </div>

      <div className={classes.details}>
        <div>Taken on:</div>
        <p>
          <time dateTime={props.date_taken}>{props.date_taken}</time>
        </p>
        <div>Added on:</div>
        <p>
          <time dateTime={props.date_added}>{props.date_added}</time>
        </p>
        <div>Location:</div>
        <p>{props.location}</p>
        <div>Gear and Settings:</div>
        <p>{ReactHtmlParser(props.settings)}</p>
      </div>

      <div className={classes.description}>{ReactHtmlParser(props.description)}</div>

      <button className={`${classes.button} disable-link`}>
        <a href={props.url} target='_blank' rel='noreferrer'>
          <svg>
            <use xlinkHref='/img/style/sprite.svg#icon-lightroom'></use>
          </svg>
          <span>Click to see how I edited this photo in Lightroom</span>
        </a>
      </button>

      <div className={classes.note}>{ReactHtmlParser(props.note)}</div>

      <div className={classes.copyright}>{ReactHtmlParser(props.copyright)}</div>
    </div>
  );
};

export default PhotoProcessItem;
