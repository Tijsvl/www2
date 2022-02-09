import BlogItem from './BlogItem';
import classes from './BlogList.module.scss';

const BlogList = (props) => {
  return (
    <section>
      <h1>Blog</h1>
      <div className={`${classes.blog} ${classes.blogList}`}>
        {props.blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            author={blog.author}
            author_insta={blog.author_insta}
            cover={blog.cover}
            cover_type={blog.cover_type}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
