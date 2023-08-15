export const GALLERIES_INFO = [
  {
    slug: 'drain-20230812',
    artist: 'Drain',
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
        {GALLERIES_INFO.map(({ artist }, idx) => (
          <li key={idx}>{artist}</li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryPage
