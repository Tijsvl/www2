import { MongoClient, ObjectId } from 'mongodb';
import LesserKnownIcelandIndexLocation from '../../../components/pages/Blog/LesserKnownIceland/LesserKnownIcelandIndexLocation';

const LocationPage = (props) => {
  return <LesserKnownIcelandIndexLocation details={props.itemData} />;
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  );

  const collection = client.db().collection('blogs');
  const documents = await collection.find({}, { _id: 1 }).toArray();

  const blogs = [];
  for (const key in documents[0].content.locations) {
    blogs.push({
      slug: documents[0].content.locations[key].slug,
    });
  }

  client.close();

  return {
    fallback: false,
    paths: blogs.map((doc) => ({ params: { objectId: doc.slug } })),
  };
}

export async function getStaticProps(context) {
  const objectId = context.params.objectId;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
  );

  const collection = client.db().collection('blogs');
  const curDoc = await collection.findOne(
    { cover: 'cover' },
    { _id: ObjectId() }
  );
  const curLocation = curDoc.content.locations;

  const blogs = [];
  for (const key in curLocation) {
    if (curLocation[key].slug === objectId) {
      blogs.push({
        title: curLocation[key].title,
        slug: curLocation[key].slug,
        cover: curLocation[key].cover,
        entranceFee: curLocation[key].entranceFee,
        entranceNote: curLocation[key].entranceNote,
        ferryTime: curLocation[key].ferryTime,
        footnote: curLocation[key].footnote,
        gravelRoad: curLocation[key].gravelRoad,
        gravelTime: curLocation[key].gravelTime,
        hikingDifficulty: curLocation[key].hikingDifficulty,
        hikingDistance: curLocation[key].hikingDistance,
        hikingTime: curLocation[key].hikingTime,
        location: curLocation[key].location,
        note: curLocation[key].note,
        order: curLocation[key].order,
        parking: curLocation[key].parking,
        photoText: curLocation[key].photoText,
        photos: curLocation[key].photos,
        region: curLocation[key].region,
        status: curLocation[key].status,
        text: curLocation[key].text,
        vehicle: curLocation[key].vehicle,
      });
    }
  }

  client.close();

  return {
    props: {
      itemData: {
        ...blogs[0],
      },
    },
  };
}

export default LocationPage;
