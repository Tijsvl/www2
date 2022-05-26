import { useContext } from 'react'
import Head from 'next/head'
import AuthContext from '../../../store/auth-context'

import InstagramPost from '../../../components/pages/User/Instagram/InstagramPost'

const InstagramPreviewPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const photos = ['0K7A5369', '0K7A5382', '0K7A5399', '0K7A5409', '0K7A5413', '0K7A5426', '3R7A3439']

  return (
    <>
      <Head>
        <title>@tijsvl | Foute Skipakken | Raalte | Instagram Preview</title>
      </Head>
      <section>
        <h1 style={{ marginBottom: 0 }}>Foute Skipakken | Raalte</h1>
        <h2 style={{ textAlign: 'center', margin: '2rem 0 2rem 0' }}>Instagram Preview</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Click to open full size
        </p>

        {photos.map((photo) => (
          <InstagramPost image={photo} key={photo} account='fouteskipakkenpartyteam' location='raalte' />
        ))}
      </section>
    </>
  )
}

export default InstagramPreviewPage
