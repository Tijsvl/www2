import classes from './Blog.module.scss';

const Blog = (props) => {
  return <section className={classes.blog}>{props.children}</section>;
};

export default Blog;
