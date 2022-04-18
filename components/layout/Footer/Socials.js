import classes from './Socials.module.scss'

const Socials = () => {
  return (
    <ul className={classes.socials}>
      <li>
        <a
          href='https://www.instagram.com/tijsvl'
          target='_blank'
          rel='noreferrer'
          aria-label='Tijsvl Instagram'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-instagram'></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/lookwhatiso'
          target='_blank'
          rel='noreferrer'
          aria-label='Look What ISO Instagram'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-instagram'></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href='https://www.facebook.com/tijsvl'
          target='_blank'
          rel='noreferrer'
          aria-label='Tijsvl Facebook'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-facebook'></use>
          </svg>
        </a>
      </li>
      <li>
        <a href='https://twitter.com/tijsvl' target='_blank' rel='noreferrer' aria-label='Tijsvl Twitter'>
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-twitter'></use>
          </svg>
        </a>
      </li>
      <li>
        <a href='https://unsplash.com/@tijsvl' target='_blank' rel='noreferrer' aria-label='Tijsvl Unsplash'>
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-unsplash'></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href='https://500px.com/p/lookwhatiso'
          target='_blank'
          rel='noreferrer'
          aria-label='Look What ISO 500px'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-500px'></use>
          </svg>
        </a>
      </li>
      <li>
        <a href='https://github.com/Tijsvl' target='_blank' rel='noreferrer' aria-label='Tijsvl Github'>
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-github'></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href='https://cssbattle.dev/player/tijsvl'
          target='_blank'
          rel='noreferrer'
          aria-label='Tijsvl CSS Battle'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-cssbattle'></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/tijsvl/'
          target='_blank'
          rel='noreferrer'
          aria-label='Tijsvl LinkedIn'
        >
          <svg aria-hidden='true'>
            <use xlinkHref='/img/style/sprite.svg#icon-linkedin'></use>
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default Socials
