import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '../../../../store/auth-context'

import classes from './UserQuickMenu.module.scss'

const UserQuickMenu = () => {
  const authCtx = useContext(AuthContext)
  const logoutHandler = () => authCtx.logout()

  return (
    <div className={classes.quickmenu} suppressHydrationWarning={true}>
      <h2>Welcome!</h2>
      <ul>
        <li>
          <Link href='/photo-approval'>
            <a>Photo Approval</a>
          </Link>
        </li>
        <li>
          <Link href='/instagram'>
            <a>Instagram Planner</a>
          </Link>
        </li>
        <li>
          <Link href='/instagram-preview'>
            <a>Instagram Preview</a>
          </Link>
        </li>
        <li>
          <Link href='/user-settings'>
            <a>User settings</a>
          </Link>
        </li>
      </ul>
      <button className={classes.logout} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  )
}

export default UserQuickMenu
