import Image from 'next/image'
import { ComparisonSlider } from 'react-comparison-slider'

import classes from './PhotoProcessItem.module.scss'

const PhotoProcessItem = ({ title, dimensions, orientation, date_taken, date_added, settings, description, copyright, slug, location, url, note }) => {
  const before = `/blogs/how-i-edit-my-photos/content/${slug}-before-1000.jpg`
  const after = `/blogs/how-i-edit-my-photos/content/${slug}-after-1000.jpg`

  return (
    <div className={classes.item}>
      <h2>{title}</h2>
      <div className={classes.compare}>
        <ComparisonSlider
          defaultValue={50}
          itemOne={<Image layout="responsive" width="50rem" height="50rem" title={title} alt={title} src={before} />}
          itemTwo={<Image layout="responsive" width="50rem" height="50rem" title={title} alt={title} src={after} />}
          aspectRatio={dimensions}
          orientation={orientation}
          handleBefore={<div className={orientation === 'vertical' ? classes.handleBeforeV : classes.handleBeforeH}></div>}
          handleAfter={<div className={orientation === 'vertical' ? classes.handleAfterV : classes.handleAfterH}></div>}
        />
      </div>

      <div className={classes.details}>
        <div>Taken on:</div>
        <p>
          <time dateTime={date_taken}>{date_taken}</time>
        </p>
        <div>Added on:</div>
        <p>
          <time dateTime={date_added}>{date_added}</time>
        </p>
        <div>Location:</div>
        <p>{location}</p>
        <div>Gear and Settings:</div>
        <p dangerouslySetInnerHTML={{ __html: settings }} />
      </div>

      <div className={classes.description} dangerouslySetInnerHTML={{ __html: description }} />

      <button className={`${classes.button} disable-link`}>
        <a href={url} target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-lightroom"></use>
          </svg>
          <span>Click to see how I edited this photo in Lightroom</span>
        </a>
      </button>

      <div className={classes.note} dangerouslySetInnerHTML={{ __html: note }} />

      <div className={classes.copyright} dangerouslySetInnerHTML={{ __html: copyright }} />
    </div>
  )
}

export default PhotoProcessItem
