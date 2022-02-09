import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import classes from './LesserKnownIcelandIndexItem.module.scss';

const LesserKnownIcelandIndexItem = (props) => {
  const router = useRouter();

  return props.locations
    .filter((location) => location.region == props.region)
    .map((location) => (
      <li className={classes.item} key={location.slug}>
        <h5>
          <Link href={`${router.pathname}/${location.slug}`}>
            <a>{location.title}</a>
          </Link>
        </h5>
        <picture>
          <Image
            layout='fill'
            objectFit='cover'
            src={`/blogs/lesser-known-iceland/content/${location.slug}__${location.cover}-750.jpg`}
            blurDataURL={`/blogs/lesser-known-iceland/content/${location.slug}__${location.cover}-blur.jpg`}
            placeholder='blur'
            alt={location.title}
            title={location.title}
          />
        </picture>
      </li>
    ));
};

export default LesserKnownIcelandIndexItem;
