import Head from 'next/head';

import { MongoClient } from 'mongodb';

import BlogList from '../../components/pages/Blog/BlogList';

const BlogPage = (props) => {
  const blogs = props.blogs.sort((a, b) =>
    a.order > b.order ? 1 : b.order > a.order ? -1 : 0
  );
  return (
    <>
      <Head>
        <title>@tijsvl | Blog</title>
        <meta property="og:title" content="@tijsvl | Blog" />
        <meta name="twitter:title" content="@tijsvl | Blog" />
        <meta
          property="og:description"
          content="How I Edit My Photos, Lesser Known Iceland, Lesser Known Bulgaria and more blogs bij @tijsvl"
        />
        <meta
          name="twitter:description"
          content="How I Edit My Photos, Lesser Known Iceland, Lesser Known Bulgaria and more blogs bij @tijsvl"
        />
        <meta
          name="description"
          content="How I Edit My Photos, Lesser Known Iceland, Lesser Known Bulgaria and more blogs bij @tijsvl"
        />
        <meta
          property="og:image"
          content="https://tijsvl.vercel.app/blogs/how-i-edit-my-photos/header-2000.jpg"
        />
        <meta
          property="og:image:alt"
          content="https://tijsvl.vercel.app/blogs/lesser-known-iceland/header-2000.jpg"
        />
        <meta
          name="twitter:image"
          content="https://tijsvl.vercel.app/blogs/how-i-edit-my-photos/header-2000.jpg"
        />
        <link rel="canonical" href="https://tijsvl.net/blog" />
        <meta property="og:url" content="https://tijsvl.net/blog" />
        <meta name="twitter:url" content="https://tijsvl.net/blog" />
      </Head>
      <BlogList blogs={blogs} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  );
  const db = client.db();

  const collection = db.collection('blogs');
  const documents = await collection.find().toArray();

  client.close();

  return {
    props: {
      blogs: documents.map((doc) => ({
        id: doc._id.toString(),
        order: doc.order,
        title: doc.title,
        slug: doc.slug,
        author: doc.author,
        author_insta: doc.author_insta,
        date: doc.date,
        description: doc.description,
        order: doc.order,
        cover: doc.cover,
        cover_type: doc.cover_type,
      })),
    },
    revalidate: 600, // Number of seconds React waits to revalidate (if page is visited)
  };
};

export default BlogPage;
