/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'

import classes from './InstagramHead.module.scss'

const InstagramHead = () => {
  const router = useRouter()

  const isActive = (route) => {
    const pathname = '/' + router.asPath.split('/')[2]
    return route === pathname ? `${classes.active}` : null
  }

  return (
    <>
      <h1>Instagram Planner</h1>
      <div className={classes.head}>
        <Link href="/instagram/tijsvl">
          <button className={isActive('/tijsvl')}>
            <img src="/img/profile-tijsvl.jpg" alt="profile photo" />
            @tijsvl
          </button>
        </Link>
        <Link href="/instagram/lookwhatiso">
          <button className={isActive('/lookwhatiso')}>
            <img src="/img/profile-lookwhatiso.jpg" alt="profile photo" />
            @lookwhatiso
          </button>
        </Link>
      </div>
    </>
  )
}

export default InstagramHead
