import Image from 'next/image';

import classes from './Mockups.module.scss';

function Mockups(props) {
  if (props.position === 'top') {
    return (
      <div className={classes.mockups}>
        <a
          href="https://tijsvl.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              layout="fill"
              objectFit="cover"
              src="/img/prints__unsplash-minh-pham-lB9ylP8e9Sg-1000.jpg"
              blurDataURL="/img/prints__unsplash-minh-pham-lB9ylP8e9Sg-blur.jpg"
              alt="Livingroom photo by Minh Pham on Unsplash"
              title="Livingroom photo by Minh Pham on Unsplash"
              placeholder="blur"
            />
          </picture>
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-external"></use>
          </svg>
        </a>
        <a
          href="https://tijsvl.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              layout="fill"
              objectFit="cover"
              src="/img/prints__2-1000.jpg"
              blurDataURL="/img/prints__2-blur.jpg"
              alt="Livingroom photo by <unknown> on Unsplash"
              title="Livingroom photo by <unknown> on Unsplash"
              placeholder="blur"
            />
          </picture>
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-external"></use>
          </svg>
        </a>
        <a
          href="https://tijsvl.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              layout="fill"
              objectFit="cover"
              src="/img/prints__3-1000.jpg"
              blurDataURL="/img/prints__3-blur.jpg"
              alt="Livingroom photo by <unknown> on Unsplash"
              title="Livingroom photo by <unknown> on Unsplash"
              placeholder="blur"
            />
          </picture>
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-external"></use>
          </svg>
        </a>
        <a
          href="https://tijsvl.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              layout="fill"
              objectFit="cover"
              src="/img/prints__unsplash-louis-mornaud-BcYQDHopq7Q-1000.jpg"
              blurDataURL="/img/prints__unsplash-louis-mornaud-BcYQDHopq7Q-blur.jpg"
              alt="Livingroom photo by Louis Mornaud on Unsplash"
              title="Livingroom photo by Louis Mornaud on Unsplash"
              placeholder="blur"
            />
          </picture>
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-external"></use>
          </svg>
        </a>
      </div>
    );
  }

  if (props.position === 'bottom') {
    return (
      <div className={classes.mockups}>
        <a
          href="https://tijsvl.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture className={classes.bottom}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/img/prints__unsplash-naomi-hebert-2dcYhvbHV-M-2000.jpg"
              blurDataURL="/img/prints__unsplash-naomi-hebert-2dcYhvbHV-M-blur.jpg"
              alt="Livingroom photo by Naomi Hebert on Unsplash"
              title="Livingroom photo by Naomi Hebert on Unsplash"
              placeholder="blur"
            />
          </picture>
          <svg>
            <use xlinkHref="/img/style/sprite.svg#icon-external"></use>
          </svg>
        </a>
      </div>
    );
  }
}

export default Mockups;
