import useWindowDimensions from '../../../hooks/useWindowSize';
import VideoItem from './VideoItem';
import classes from './VideoList.module.scss';

const VideoList = (props) => {
  let width = 3000;
  let height = 2000;
  if (typeof window !== 'undefined') {
    width = useWindowDimensions().width;
    height = useWindowDimensions().height;
  }

  return (
    <section>
      <h1>Videography</h1>
      <div className={classes.items}>
        {props.videos.map((item) => (
          <VideoItem
            key={item.slug}
            artist={item.artist}
            title={item.title}
            slug={item.slug}
            videoId={item.id}
            source={item.source}
            dimensions={item.dimensions}
            credits={item.credits}
            width={width}
            height={height}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoList;
