import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'

import AuthContext from '../../../../store/auth-context'
import LoginForm from './UserLoginForm'
import UserQuickMenu from './UserQuickMenu'
import classes from './UserLogin.module.scss'

const User = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const [loginForm, setLoginForm] = useState(false)

  const onClickHandler = (e) => (e.preventDefault(), setLoginForm(!loginForm))

  useEffect(() => {
    window.addEventListener('mousedown', (e) => {
      const controlUser = document.getElementById('controlUser')
      !controlUser.contains(e.target) && setLoginForm(false)
    })
  }, [])

  return (
    <div suppressHydrationWarning={true}>
      {isLoggedIn && (
        <span suppressHydrationWarning={true}>
          <div className={classes.user} id='controlUser' data-status='user'>
            <Link href='/profile'>
              <a onClick={onClickHandler} role='button'>
                <svg data-status='user'>
                  <use xlinkHref='/img/style/sprite.svg#icon-login'></use>
                </svg>
              </a>
            </Link>
            <div className={`${classes.form} ${loginForm && classes.active}`} id='controlUserForm'>
              <UserQuickMenu />
            </div>
          </div>
        </span>
      )}
      {!isLoggedIn && (
        <div className={classes.user} id='controlUser' data-status='anonymous'>
          <Link href='/profile'>
            <a onClick={onClickHandler}>
              <svg className={classes.login}>
                <use xlinkHref='/img/style/sprite.svg#icon-login'></use>
              </svg>
            </a>
          </Link>
          <div className={`${classes.form} ${loginForm && classes.active}`} id='controlUserForm'>
            <div className={classes.wrapper}>
              <LoginForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default User
