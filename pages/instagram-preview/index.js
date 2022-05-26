import Link from 'next/link'

const InstagramPreviewPage = () => {
  return (
    <div>
      <h1>Instagram Preview</h1>
      <ul style={{ fontSize: '1.4rem', textAlign: 'center', display: 'grid', gridGap: '2rem' }}>
        <li>
          <Link href='/instagram-preview/tomjacks-groningen'>
            <a style={{ textDecoration: 'underline' }}>Tom Jacks - Groningen</a>
          </Link>
        </li>
        <li>
          <Link href='/instagram-preview/fouteskipakkenpartyteam-marienheen'>
            <a style={{ textDecoration: 'underline' }}>Foute Skipakken Party Team - Marienheen</a>
          </Link>
        </li>
        <li>
          <Link href='/instagram-preview/fouteskipakkenpartyteam-raalte'>
            <a style={{ textDecoration: 'underline' }}>Foute Skipakken Party Team - Raalte</a>
          </Link>
        </li>
        <li>
          <Link href='/instagram-preview/fouteskipakkenpartyteam-kwintsheul'>
            <a style={{ textDecoration: 'underline' }}>Foute Skipakken Party Team - Kwintsheul</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default InstagramPreviewPage
