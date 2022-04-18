import { useContext } from 'react'
import Head from 'next/head'
import AuthContext from '../../store/auth-context'

import InstagramPost from '../../components/pages/User/Instagram/InstagramPost'

const InstagramPreviewPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) return <div className='error-message'>Not Logged In</div>

  const photos = [
    '0K7A3866',
    '0K7A3870',
    '0K7A3884',
    '0K7A3901',
    '0K7A4063',
    '0K7A4080',
    '0K7A4109',
    '0K7A4111',
    '0K7A4114',
    '0K7A4116',
    '0K7A4146',
    '3R7A2020',
    '3R7A2038',
    '3R7A2070',
    '3R7A2079',
    '3R7A2097',
    '3R7A2098',
    '3R7A2117',
    '3R7A2119',
    '3R7A2126',
    '3R7A2131',
    '3R7A2145',
    '3R7A2147',
    '3R7A2150',
    '3R7A2157',
    '3R7A2158',
    '3R7A2174',
    '3R7A2177',
    '3R7A2186',
    '3R7A2221',
    '3R7A2282',
    '3R7A2290',
    '3R7A2295',
    '3R7A2297',
    '3R7A2305',
    '3R7A2308',
    '3R7A2313',
    '3R7A2338'
  ]

  return (
    <>
      <Head>
        <title>@tijsvl | Instagram Preview</title>
      </Head>
      <section>
        <h1>Instagram Preview</h1>

        {photos.map((photo) => (
          <InstagramPost image={photo} key={photo} />
        ))}
      </section>
    </>
  )
}

export default InstagramPreviewPage
