export const GALLERIES_INFO = [
  {
    slug: 'drain-20231121',
    artist: 'Drain',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'stick-to-your-guns-20230812',
    artist: 'Stick To Your Guns',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'deez-nuts-20230812',
    artist: 'Deez Nuts',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'pennywise-20230812',
    artist: 'Pennywise',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'scowl-20230812',
    artist: 'Scowl',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'death-before-dishonor-20230812',
    artist: 'Death Before Dishonor',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Villmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'scowl-20230813',
    artist: 'Scowl',
    country: 'The Netherlands',
    location: 'Blue Collar Hotel',
    city: 'Eindhoven',
    date: '20230813',
    prettyDate: 'August 13, 2023'
  },
  {
    slug: 'stick-to-your-guns-20230822',
    artist: 'Stick To Your Guns',
    country: 'England',
    location: 'The Dome',
    city: 'London',
    date: '20230822',
    prettyDate: 'August 22, 2023'
  },
  {
    slug: 'knocked-loose-20230824',
    artist: 'Knocked Loose',
    country: 'England',
    location: 'The Dome',
    city: 'London',
    date: '20230824',
    prettyDate: 'August 24, 2023'
  },
  {
    slug: 'the-rumjacks-20231101',
    artist: 'The Rumjacks',
    country: 'The Netherlands',
    location: 'Melkweg',
    city: 'Amsterdam',
    date: '20231101',
    prettyDate: 'November 1, 2023'
  },
  {
    slug: 'corey-taylor-20231114',
    artist: 'Corey Taylor',
    country: 'England',
    location: 'Eventim Apollo',
    city: 'London',
    date: '20231114',
    prettyDate: 'November 14, 2023'
  },
  {
    slug: 'oxymorrons-20231114',
    artist: 'Oxymorrons',
    country: 'England',
    location: 'Eventim Apollo',
    city: 'London',
    date: '20231114',
    prettyDate: 'November 14, 2023'
  },
  {
    slug: 'corey-taylor-20231118',
    artist: 'Corey Taylor',
    country: 'The Netherlands',
    location: '013',
    city: 'Tilburg',
    date: '20231118',
    prettyDate: 'November 18, 2023'
  },
  {
    slug: 'oxymorrons-20231118',
    artist: 'Oxymorrons',
    country: 'The Netherlands',
    location: '013',
    city: 'Tilburg',
    date: '20231118',
    prettyDate: 'November 18, 2023'
  },
  {
    slug: 'death-before-dishonor-20231121',
    artist: 'Death Before Dishonor',
    country: 'England',
    location: 'New Cross Inn',
    city: 'London',
    date: '20231121',
    prettyDate: 'November 21, 2023'
  }
]

const GalleryPage = () => {
  return (
    <div>
      <ul>
        {GALLERIES_INFO.map(({ slug, artist, prettyDate }) => (
          <li key={slug}>
            <a href={`/gallery/${slug}`}>
              {prettyDate} | <strong>{artist}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryPage
