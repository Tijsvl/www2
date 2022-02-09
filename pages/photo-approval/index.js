import { useContext } from 'react'
import Head from 'next/head'
import { MongoClient } from 'mongodb'
import AuthContext from '../../store/auth-context'
import GalleryList from '../../components/pages/User/PhotoApproval/GalleryList'

const PhotoApprovalPage = (props) => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const shows = props.shows.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))

  return (
    <>
      <Head>
        <title>@tijsvl | Photo Approval</title>
      </Head>
      <section>
        <h1>Photo Approval</h1>
        <GalleryList galleries={shows} isLoggedIn={isLoggedIn} />
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  )
  const db = client.db()

  const collection = db.collection('approvals')
  const documents = await collection.find().toArray()

  client.close()

  return {
    props: {
      shows: documents.map((doc) => ({
        id: doc._id.toString(),
        date: doc.date,
        artist: doc.artist,
        venue: doc.venue,
        city: doc.city,
        country: doc.country,
        photos: doc.photos,
        team: doc.team,
        slug: doc.slug,
        processed: doc.processed
      }))
    },
    revalidate: 600 // Number of seconds React waits to revalidate (if page is visited)
  }
}

export default PhotoApprovalPage
