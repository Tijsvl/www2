import { MongoClient, ObjectId } from 'mongodb';

// accepts requests and response opbjects
async function handler(req, res) {
  if (req.method === 'PUT') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/tijsvl?retryWrites=true&w=majority`
    );
    const db = client.db();
    const Collection = db.collection('approvals');

    // must be an object
    const result = await Collection.updateOne(
      { _id: ObjectId(data.id) },
      {
        $set: {
          [`photos.${data.photo}.approved`]: data.approved,
        },
      }
    );
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Photo set to ' + data.approved + '!' });
  }
}

export default handler;
