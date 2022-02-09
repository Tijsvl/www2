import ReactHtmlParser from 'react-html-parser';

const BlogHTML = (props) => {
  return (
    <>
      {props.ext_css && <link rel='stylesheet' href={`/blogs/${props.slug}/assets/style.css`} />}
      {ReactHtmlParser(props.html)}
    </>
  );
};

export default BlogHTML;
