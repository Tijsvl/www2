import { useContext } from 'react'
import Head from 'next/head'
import AuthContext from '../../../store/auth-context'

import InstagramPost from '../../../components/pages/User/Instagram/InstagramPost'

const InstagramPreviewPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const photos = [
    '0K7A5442',
    '0K7A5452',
    '0K7A5484',
    '0K7A5486',
    '0K7A5488',
    '0K7A5508',
    '0K7A5521',
    '3R7A3467',
    '3R7A3487',
    '3R7A3499',
    '3R7A3509',
    '3R7A3523',
    '3R7A3525',
    '3R7A3534',
    '3R7A3592',
    '3R7A3608',
    '3R7A3651'
  ]

  return (
    <>
      <Head>
        <title>@tijsvl | Foute Skipakken | Marienheen | Instagram Preview</title>
      </Head>
      <section>
        <h1 style={{ marginBottom: 0 }}>Foute Skipakken | Marienheen</h1>
        <h2 style={{ textAlign: 'center', margin: '2rem 0 2rem 0' }}>Instagram Preview</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Click to open full size
        </p>

        {photos.map((photo) => (
          <InstagramPost image={photo} key={photo} account='fouteskipakkenpartyteam' location='marienheen' />
        ))}
      </section>
    </>
  )
}

export default InstagramPreviewPage
