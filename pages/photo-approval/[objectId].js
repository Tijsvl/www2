import { useContext } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import AuthContext from '../../store/auth-context';
import Gallery from '../../components/pages/User/PhotoApproval/Gallery';

const GalleryDetails = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) return <div className="error-message">Not Logged In</div>;

  const readyHandler = async (enteredData) => {
    const response = await fetch('/api/approval-ready', {
      method: 'PUT',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  };

  const rejectHandler = async (enteredData) => {
    const response = await fetch('/api/approval-photo', {
      method: 'PUT',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(enteredData);
  };

  return (
    <>
      <Head></Head>
      <Gallery
        key={props.gallery.slug}
        details={props.gallery}
        onReady={readyHandler}
        onReject={rejectHandler}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  );

  const db = client.db();
  const galleryCollection = db.collection('approvals');
  const galleries = await galleryCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: galleries.map((gallery) => ({
      params: { objectId: gallery._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const objectId = context.params.objectId;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  );

  const db = client.db();
  const galleryCollection = db.collection('approvals');
  const selectedGallery = await galleryCollection.findOne({
    _id: ObjectId(objectId),
  });

  client.close();

  return {
    props: {
      gallery: {
        id: selectedGallery._id.toString(),
        artist: selectedGallery.artist,
        city: selectedGallery.city,
        country: selectedGallery.country,
        date: selectedGallery.date,
        photos: selectedGallery.photos,
        processed: selectedGallery.processed,
        slug: selectedGallery.slug,
        team: selectedGallery.team,
        venue: selectedGallery.venue,
      },
    },
  };
}

export default GalleryDetails;
