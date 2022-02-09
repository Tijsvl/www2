import Image from 'next/image';

import classes from './PrintItem.module.scss';

const PrintItem = () => {
  return (
    <div className={classes.shop}>
      <a href='https://tijsvl.bigcartel.com/product/noodles-middlefinger' target='_blank' rel='noreferrer'>
        <picture>
          <Image
            layout='fill'
            objectFit='cover'
            src='/img/prints__buy__noodles-middlefinger-1000.jpg'
            blurDataURL='/img/prints__buy__noodles-middlefinger-blur.jpg'
            alt='Limited Edition Noodles Middlefinger photo'
            title='Limited Edition Noodles Middlefinger photo'
            placeholder='blur'
          />
        </picture>
        <div className={classes.title}>Noodles Middlefinger</div>
        <div className={classes.price}>from €17.99</div>
        {/* <div className={classes.info}>Only 15 available!</div> */}
        <div className={classes.badge}>The Offspring</div>
        <svg>
          <use xlinkHref='/img/style/sprite.svg#icon-external'></use>
        </svg>
      </a>

      <a href='https://tijsvl.bigcartel.com/product/dave-brownsound' target='_blank' rel='noreferrer'>
        <picture>
          <Image
            layout='fill'
            objectFit='cover'
            src='/img/prints__item__dave-brownsound-1000.jpg'
            blurDataURL='/img/prints__item__dave-brownsound-blur.jpg'
            alt='Limited Edtion Dave Brownsound photo'
            title='Limited Edtion Dave Brownsound photo'
            placeholder='blur'
          />
        </picture>
        <div className={classes.title}>Dave Brownsound</div>
        <div className={classes.price}>from €17.99</div>
        {/* <div className={classes.info}>Only 15 available!</div> */}
        <div className={classes.badge}>Sum 41</div>
        <svg>
          <use xlinkHref='/img/style/sprite.svg#icon-external'></use>
        </svg>
      </a>

      <a href='https://tijsvl.bigcartel.com/product/deryck-whibley' target='_blank' rel='noreferrer'>
        <picture>
          <Image
            layout='fill'
            objectFit='cover'
            src='/img/prints__item__deryck-whibley-1000.jpg'
            blurDataURL='/img/prints__item__deryck-whibley-blur.jpg'
            alt='Limited Edition Derycky Whibley photo'
            title='Limited Edition Derycky Whibley photo'
            placeholder='blur'
          />
        </picture>
        <div className={classes.title}>Deryck Whibley</div>
        <div className={classes.price}>from €17.99</div>
        {/* <div className={classes.info}>Only 15 available!</div> */}
        <div className={classes.badge}>Sum 41</div>
        <svg>
          <use xlinkHref='/img/style/sprite.svg#icon-external'></use>
        </svg>
      </a>

      <a href='https://tijsvl.bigcartel.com/product/dexter-holland' target='_blank' rel='noreferrer'>
        <picture>
          <Image
            layout='fill'
            objectFit='cover'
            src='/img/prints__item__dexter-holland-1000.jpg'
            blurDataURL='/img/prints__item__dexter-holland-blur.jpg'
            alt='Limited Edition Dexter Holland photo'
            title='Limited Edition Dexter Holland photo'
            placeholder='blur'
          />
        </picture>
        <div className={classes.title}>Dexter Holland</div>
        <div className={classes.price}>from €17.99</div>
        {/* <div className={classes.info}>Only 15 available!</div> */}
        <div className={classes.badge}>The Offspring</div>
        <svg>
          <use xlinkHref='/img/style/sprite.svg#icon-external'></use>
        </svg>
      </a>

      <a href='https://tijsvl.bigcartel.com/product/pick-your-own' target='_blank' rel='noreferrer'>
        <picture className={classes.large}>
          <Image
            layout='fill'
            objectFit='cover'
            src='/img/prints__item__pick-1000.jpg'
            blurDataURL='/img/prints__item__pick-blur.jpg'
            alt='Pick any photo!'
            title='Pick any photo!'
            placeholder='blur'
          />
        </picture>
        <div className={classes.title}>Pick your own!</div>
        <div className={classes.price}>from €17.49</div>
        <div className={classes.badge}>Your choice!</div>
        <svg>
          <use xlinkHref='/img/style/sprite.svg#icon-external'></use>
        </svg>
      </a>
    </div>
  );
};

export default PrintItem;
