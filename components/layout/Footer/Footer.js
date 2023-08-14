import classes from './Footer.module.scss'
import Socials from './Socials'
import Archive from './Archive'
import Contact from './Contact'
import Hedgequarters from './Hedgequarters'

const Footer = () => {
  return (
    <footer className={classes.footer} data-identifier="layout-element">
      <nav aria-label="Footer Navigation" id="tertiary-navigation">
        <Socials />
        <Archive />
        <Contact />
        <Hedgequarters />
      </nav>
    </footer>
  )
}

export default Footer
