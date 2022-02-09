import Image from 'next/image';
import classes from './PhotoItem.module.scss';

const PhotoItem = (props) => {
  return (
    <figure
      className={props.span ? classes[props.span] : classes[props.x1y1]}
      key={props.src}
    >
      <picture className={classes.photo}>
        <Image
          src={`/img/p/${props.src}-2000.jpg`}
          blurDataURL={`/img/p/${props.src}-blur.jpg`}
          layout="responsive"
          height="40rem"
          width="40rem"
          objectFit="cover"
          alt={props.title}
          title={props.title}
          placeholder="blur"
        />
      </picture>
      {props.title && <figcaption>{props.title}</figcaption>}
    </figure>
  );
};

export default PhotoItem;
