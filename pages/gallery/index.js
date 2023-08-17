import Link from 'next/link'

export const GALLERIES_INFO = [
  {
    slug: 'drain-20230812',
    artist: 'Drain',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Vilmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'stick-to-your-guns-20230812',
    artist: 'Stick To Your Guns',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Vilmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  },
  {
    slug: 'deez-nuts-20230812',
    artist: 'Deez Nuts',
    country: 'Germany',
    location: 'Tells Bells Festival',
    city: 'Vilmar',
    date: '20230812',
    prettyDate: 'August 12, 2023'
  }
]

const GalleryPage = () => {
  return (
    <div>
      <ul>
        {GALLERIES_INFO.map(({ artist, slug, country, location, city, prettyDate }) => (
          <li key={slug}>
            <Link href={`/gallery/${slug}`}>
              {prettyData} - {artist} @ {location}, {city}, {country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryPage
