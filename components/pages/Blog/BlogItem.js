import Image from 'next/image';
import Link from 'next/link';

import classes from './BlogItem.module.scss';

const BlogItem = (props) => {
  return (
    <Link href={'/blog/' + props.slug}>
      <a className={classes.item}>
        <figure>
          {props.cover_type === 'jpg' && (
            <picture>
              <Image
                layout="fill"
                src={`/blogs/${props.slug}/${props.cover}-1000.${props.cover_type}`}
                blurDataURL={`/blogs/${props.slug}/${props.cover}-blur.${props.cover_type}`}
                placeholder="blur"
                alt={props.title}
                title={'Blog: ' + props.title}
                objectFit="cover"
              />
            </picture>
          )}
          {props.cover_type === 'mp4' && (
            <picture>
              <video
                autoPlay
                muted
                loop
                poster={`/blogs/${props.slug}/${props.cover}-500.${props.cover_type}`}
              >
                <source
                  src={`/blogs/${props.slug}/${props.cover}-2000.${props.cover_type}`}
                  type="video/mp4"
                  media="all and (min-width: 1000px)"
                />
                <source
                  src={`/blogs/${props.slug}/${props.cover}-500.${props.cover_type}`}
                  type="video/mp4"
                  media="all and (min-width: 500px)"
                />
                <source
                  src={`/blogs/${props.slug}/${props.cover}-500.${props.cover_type}`}
                  type="video/mp4"
                  media="all and (min-width: 250px)"
                />
                <source
                  src={`/blogs/${props.slug}/${props.cover}-1000.${props.cover_type}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </picture>
          )}
          <figcaption>
            {props.title} by {props.author}
          </figcaption>
        </figure>
        <article>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </article>
      </a>
    </Link>
  );
};

export default BlogItem;
