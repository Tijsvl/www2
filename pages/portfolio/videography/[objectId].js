import { MongoClient, ObjectId } from 'mongodb';

import ViewVideo from '../../../components/pages/Portfolio/ViewVideo';

const VideoDetails = (props) => {
  const image = `/img/videography__${props.itemData.slug}.jpg`;

  return (
    <ViewVideo
      artist={props.itemData.artist}
      title={props.itemData.title}
      slug={props.itemData.slug}
      source={props.itemData.source}
      credits={props.itemData.credits}
      dimensions={props.itemData.dimensions}
      key={props.itemData.id}
      image={image}
      id={props.itemData.id}
      autoplay="false"
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/portfolio?retryWrites=true&w=majority`
  );

  const collection = client.db().collection('video');
  const documents = await collection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: documents.map((doc) => ({ params: { objectId: doc.slug } })),
  };
}

export async function getStaticProps(context) {
  const objectId = context.params.objectId;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/portfolio?retryWrites=true&w=majority`
  );

  const collection = client.db().collection('video');
  const curDoc = await collection.findOne(
    { slug: objectId },
    { _id: ObjectId() }
  );
  client.close();

  return {
    props: {
      itemData: {
        id: curDoc._id.toString(),
        artist: curDoc.artist,
        title: curDoc.title,
        source: curDoc.source,
        dimensions: curDoc.dimensions,
        credits: curDoc.credits,
        slug: curDoc.slug,
      },
    },
  };
}

export default VideoDetails;
