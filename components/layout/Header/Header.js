import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Controls from './Controls/Controls'
import classes from './Header.module.scss'

const Header = () => {
  const [menu, setMenu] = useState('hide')
  const router = useRouter()

  const isActive = (route) => {
    const pathname = '/' + router.asPath.split('/')[1]
    return route === pathname ? `${classes.active}` : null
  }

  const menuHandler = (e) => (menu === 'hide' ? setMenu('show') : setMenu('hide'))

  const menuHide = () => setMenu('hide')

  return (
    <>
      <header className={classes.header}>
        <Link href='/'>
          <a className={classes.logo} onClick={menuHide}>
            <span className={classes.flash + ' theme-light'}>
              <Image layout='fill' src='/img/style/logo.gif' alt='Tijsvl Home' />
            </span>
            <span className={classes.flash + ' theme-dark'}>
              <Image layout='fill' src='/img/style/logo-dark.gif' alt='Tijsvl Home' />
            </span>
            TIJSVL
          </a>
        </Link>
        <nav className={classes.nav} id='primary-navigation' aria-label='Main Navigation'>
          <button
            aria-controls='primary-navigation'
            aria-expanded={menu === 'show' ? 'true' : 'false'}
            className={(menu === 'show' ? classes.hide : classes.show) + ' ' + classes.hamburger}
            onClick={menuHandler}
          >
            <span>Menu</span>
          </button>
          <ul className={menu === 'hide' ? classes.hide : classes.show}>
            <li onClick={menuHide} className={isActive('/')}>
              <Link href='/' title='tijsvl.net'>
                Home
              </Link>
            </li>
            <li onClick={menuHide} className={isActive('/about')}>
              <Link href='/about'>About</Link>
            </li>
            <li onClick={menuHide} className={isActive('/portfolio')}>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            {/* <li onClick={menuHide} className={isActive('/wallpapers')}>
              <Link href='/wallpapers'>Wallpapers</Link>
            </li> */}
            <li onClick={menuHide} className={isActive('/prints')}>
              <Link href='/prints'>Prints</Link>
            </li>
            <li onClick={menuHide} className={isActive('/blog')}>
              <Link href='/blog'>Blog</Link>
            </li>
            <li onClick={menuHide} className={isActive('/contact')}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Controls />
    </>
  )
}

export default Header
