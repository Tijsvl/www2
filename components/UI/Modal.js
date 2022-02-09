import Image from 'next/image';

import classes from './Modal.module.scss';

const Modal = (props) => {
  const totalPhotos = props.photos.length;

  return (
    <div onClick={props.closeModal} className={classes.modal + ' ' + classes.backdrop} id='modalOpen'>
      <button className={classes.close}></button>
      <div className={classes.inner}>
        <span>
          <Image
            src={`/blogs/lesser-known-iceland/content/${props.photos[props.current].img}-1500.jpg`}
            blurDataURL={`/blogs/lesser-known-iceland/content/${props.photos[props.current].img}-blur.jpg`}
            placeholder='blur'
            alt={props.title}
            title={props.title}
            unoptimized='true'
            quality={100}
            layout='fill'
          />
        </span>
      </div>
      <aside>
        <h2>
          {props.title}, Iceland - {props.current + 1}/{totalPhotos}
        </h2>
        <p>Photo by: {props.photos[props.current].credit}</p>
      </aside>
    </div>
  );
};

export default Modal;
