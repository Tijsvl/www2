import Head from 'next/head'

import { MongoClient } from 'mongodb'

import Blog from '../../../components/pages/Blog/Blog'
import BlogHeader from '../../../components/pages/Blog/BlogHeader'
import PhotoProcessItem from '../../../components/pages/Blog/HowIEditMyPhotos/PhotoProcessItem'

const HowIEditMyPhotosPage = (props) => {
  const blog = props.blog[0]

  return (
    <>
      <Head>
        <title>@tijsvl | {blog.title}</title>
        <meta property="og:title" key="ogTitle" content={`@tijsvl | ${blog.title}`} />
        <meta name="twitter:title" key="twitterTitle" content={`@tijsvl | ${blog.title}`} />
        <meta
          property="og:description"
          content="Watch over my shoulder and learn my secrets! From time to time I will add a photo to Lightroom Discover revealing step by step how I edit my photos from its original shot to the final product."
        />
        <meta
          name="twitter:description"
          content="Watch over my shoulder and learn my secrets! From time to time I will add a photo to Lightroom Discover revealing step by step how I edit my photos from its original shot to the final product."
        />
        <meta
          name="description"
          content="Watch over my shoulder and learn my secrets! From time to time I will add a photo to Lightroom Discover revealing step by step how I edit my photos from its original shot to the final product."
        />
        <meta property="og:image" key="ogImage" content={`https://www.tijsvl.com/blogs/${blog.slug}/${blog.image}-2000.jpg`} />
        <meta name="twitter:image" key="twitterImage" content={`https://www.tijsvl.com/blogs/${blog.slug}/${blog.image}-2000.jpg`} />
        <link rel="canonical" key="canonical" href={`https://www.tijsvl.com/blog/${blog.slug}`} />
        <meta property="og:url" key="ogUrl" content={`https://www.tijsvl.com/blog/${blog.slug}`} />
        <meta name="twitter:url" key="twitterUrl" content={`https://www.tijsvl.com/blog/${blog.slug}`} />
      </Head>
      <Blog>
        <BlogHeader
          title={blog.title}
          author={blog.author}
          author_insta={blog.author_insta}
          author_insta_image={blog.author_insta_image}
          date={blog.date}
          date_updated={blog.date_updated}
          image={blog.image}
          slug={blog.slug}
          intro={blog.intro}
        />
        {blog.content.map((item) => (
          <PhotoProcessItem
            key={item.slug}
            slug={item.slug}
            title={item.title}
            date_taken={item.date_taken}
            date_added={item.date_added}
            orientation={item.orientation}
            dimensions={item.dimensions}
            reverse={item.reverse}
            location={item.location}
            settings={item.settings}
            url={item.url}
            description={item.description}
            note={item.note}
            copyright={item.copyright}
          />
        ))}
      </Blog>
    </>
  )
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`)
  const db = client.db()

  const collection = db.collection('blogs')
  const documents = await collection.find({ slug: 'how-i-edit-my-photos' }).toArray()

  client.close()

  return {
    props: {
      blog: documents.map((doc) => ({
        id: doc._id.toString(),
        title: doc.title,
        image: doc.image,
        slug: doc.slug,
        date: doc.date,
        date_updated: doc.date_updated,
        cover: doc.cover,
        cover_type: doc.cover_type,
        intro: doc.intro,
        content: doc.content,
        author: doc.author,
        author_insta: doc.author_insta,
        author_insta_image: doc.author_insta_image
      }))
    },
    revalidate: 600 // Number of seconds React waits to revalidate (if page is visited)
  }
}

export default HowIEditMyPhotosPage
