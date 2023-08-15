import React from 'react'
import Image from 'next/image'

import classes from './BlogHeader.module.scss'

const BlogHeader = (props) => {
  return (
    <div className={classes.header}>
      <h1>{props.title}</h1>

      {props.image && (
        <picture className={classes.image} style={{ aspectRatio: props.aspectRatio ? props.aspectRatio : '3 / 1' }}>
          <Image
            layout="fill"
            objectFit="cover"
            src={`/blogs/${props.slug}/${props.image}-2000.jpg`}
            blurDataURL={`/blogs/${props.slug}/${props.image}-blur.jpg`}
            placeholder="blur"
            objectPosition={props.objectPosition}
            alt={props.title}
            title={props.title}
          />
        </picture>
      )}
      <time dateTime={props.date_updated}>Last updated: {props.date_updated}</time>
      <React.Fragment dangerouslySetInnerHTML={{ __html: props.intro }} />
      <aside>
        <a href={props.author_insta} target="_blank" rel="noreferrer">
          <picture>
            {props.author_insta_image && (
              <Image
                layout="fill"
                src={`/img/${props.author_insta_image}`}
                blurDataURL={`/img/${props.author_insta_image.replace('.jpg', '-blur.jpg')}`}
                placeholder="blur"
                alt={props.author}
                title={props.author}
              />
            )}
          </picture>
          {props.author}
        </a>
      </aside>
    </div>
  )
}

export default BlogHeader
