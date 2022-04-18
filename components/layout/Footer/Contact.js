import Link from 'next/link'

import classes from './Contact.module.scss'

const Contact = () => {
  return (
    <ul className={classes.contact}>
      <li>
        <Link href='tel:+31647776116'>+31.6.4777.6116</Link>
      </li>
      <li>
        <Link href='/contact'>info@tijsvl.net</Link>
      </li>
      <li>
        <Link href='/privacy'>Privacy Policy</Link>
      </li>
      <li>
        <Link href='/copyright'>
          <a>
            Copyright <span aria-hidden='true'>©</span> {new Date().getFullYear()}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Contact
