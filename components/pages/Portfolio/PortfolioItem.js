import Image from 'next/image';
import Link from 'next/link';

import classes from './PortfolioItem.module.scss';

const PortfolioItem = (props) => {
  let firstPage = '';
  props.firstPage && (firstPage = '/' + props.firstPage);

  return (
    <>
      <Link href={'/portfolio/' + props.page + firstPage}>
        <a className={classes.category + ' disable-link'}>
          <picture>
            <Image
              layout='fill'
              src={`/img/${props.image}-2000.jpg`}
              blurDataURL={`/img/${props.image}-blur.jpg`}
              alt={props.title}
              title={props.title}
              objectPosition={props.objectPosition ? props.objectPosition : '50% 50%'}
              objectFit='cover'
              placeholder='blur'
            />
          </picture>
          <div>
            <h2>{props.title}</h2>
          </div>
        </a>
      </Link>
    </>
  );
};

export default PortfolioItem;
