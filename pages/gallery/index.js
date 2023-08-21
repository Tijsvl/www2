export const GALLERIES_INFO = [
  {
    slug: 'drain-20230812',
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
