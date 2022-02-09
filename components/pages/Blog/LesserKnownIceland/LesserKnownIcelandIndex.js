import LesserKnownIcelandIndexItem from './LesserKnownIcelandIndexItem';
import classes from './LesserKnownIcelandIndex.module.scss';

const LesserKnownIcelandIndex = (props) => {
  const data = props.locations;

  const locations = [];
  for (const key in data) {
    locations.push({
      order: data[key].order,
      slug: key,
      cover: data[key].cover,
      entranceFee: data[key].entranceFee,
      ferryTime: data[key].ferryTime,
      footnote: data[key].footnote,
      gravelRoad: data[key].gravelRoad,
      gravelTime: data[key].gravelTime,
      hikingDifficulty: data[key].hikingDifficulty,
      hikingDistance: data[key].hikingDistance,
      hikingTime: data[key].hikingTime,
      location: data[key].location,
      note: data[key].note,
      parking: data[key].parking,
      photoText: data[key].photoText,
      photos: data[key].photos,
      region: data[key].region,
      status: data[key].status,
      text: data[key].text,
      title: data[key].title,
      vehicle: data[key].vehicle,
    });
  }
  locations.sort((a, b) => (a.slug > b.slug ? 1 : -1));

  return (
    <section className={classes.index} id='index'>
      <h3>Guide index</h3>
      {props.regions
        .filter((region) => region.status == 1)
        .map((region) => (
          <div key={region.slug} title={region.slug}>
            <h2>{region.title}</h2>
            <ul>
              <LesserKnownIcelandIndexItem locations={locations} region={region.slug} />
            </ul>
          </div>
        ))}
    </section>
  );
};

export default LesserKnownIcelandIndex;
