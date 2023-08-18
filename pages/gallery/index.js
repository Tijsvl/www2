import Link from 'next/link';

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
  }
]

const GalleryPage = () => {
  return (
    <div>
      <ul>
        {GALLERIES_INFO.map(({ slug, artist, prettyDate }, idx) => (
          <li key={slug}><Link><a href={`/gallery/${slug}`}>{prettyDate} | <strong>{artist}</strong></a></Link></li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryPage
