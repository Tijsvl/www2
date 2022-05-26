import { useContext } from 'react'
import Head from 'next/head'
import AuthContext from '../../../store/auth-context'

import InstagramPost from '../../../components/pages/User/Instagram/InstagramPost'

const InstagramPreviewPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const photos = ['3R7A3724', '3R7A3775', '3R7A3786', '3R7A3787', '3R7A3802', '3R7A3809', '3R7A3841']

  return (
    <>
      <Head>
        <title>@tijsvl | Tom Jacks | Groningen | Instagram Preview</title>
      </Head>
      <section>
        <h1 style={{ marginBottom: 0 }}>Tom Jacks | Groningen</h1>
        <h2 style={{ textAlign: 'center', margin: '2rem 0 2rem 0' }}>Instagram Preview</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Click to open full size
        </p>

        {photos.map((photo) => (
          <InstagramPost image={photo} key={photo} account='tomjacks' location='groningen' />
        ))}
      </section>
    </>
  )
}

export default InstagramPreviewPage
