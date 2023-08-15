import React from 'react'

const BlogHTML = (props) => {
  return (
    <>
      {props.ext_css && <link rel="stylesheet" href={`/blogs/${props.slug}/assets/style.css`} />}
      <React.Fragment dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  )
}

export default BlogHTML
