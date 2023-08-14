import CookieConsent from 'react-cookie-consent'

import classes from './Layout.module.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout(props) {
  return (
    <div className={classes.container} data-identifier="container">
      <Header />
      <main>{props.children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        style={{ background: 'var(--light)', color: 'var(--dark)' }}
        buttonStyle={{
          background: 'var(--dark)',
          color: 'var(--light)',
          fontSize: '13px'
        }}
        declineButtonStyle={{
          background: 'var(--red)',
          color: 'var(--light-fixed)',
          fontSize: '13px'
        }}
        expires={150}
        enableDeclineButton
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  )
}

export default Layout
