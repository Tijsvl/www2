import { MongoClient } from 'mongodb';

import VideoList from '../../../components/pages/Portfolio/VideoList';

const VideoPage = (props) => {
  // Sort by order
  const videos = props.videos.sort((a, b) =>
    a.order > b.order ? 1 : b.order > a.order ? -1 : 0
  );
  return <VideoList videos={videos} />;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@cluster0.lkq1v.mongodb.net/portfolio?retryWrites=true&w=majority`
  );
  const db = client.db();

  const videoCollection = db.collection('video');
  const videos = await videoCollection.find().toArray();

  client.close();

  return {
    props: {
      videos: videos.map((video) => ({
        id: video._id.toString(),
        order: video.order,
        slug: video.slug,
        artist: video.artist,
        title: video.title,
        source: video.source,
        dimensions: video.dimensions,
        credits: video.credits,
      })),
    },
    revalidate: 600, // Number of seconds React waits to revalidate (if page is visited)
  };
};
// // --------------------------------------------------------

export default VideoPage;
