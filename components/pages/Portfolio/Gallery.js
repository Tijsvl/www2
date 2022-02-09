import classes from './Gallery.module.scss';

const Gallery = (props) => {
  return <div className={classes.grid}>{props.children}</div>;
};

export default Gallery;
