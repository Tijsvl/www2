import { useState } from 'react'
import useKeyPress from '../../../../../hooks/useKeyPress'
import classes from './infinite-scroll.module.scss'

const CSSPage = () => {
  const [invert, setInvert] = useState(false)
  const [background, setBackground] = useState(true)

  const overflowHandler = () => setBackground(!background)
  const invertHandler = () => setInvert(!invert)

  const hotkeyInterval = 600 // ms
  let overflowTime = Date.now()
  let invertTime = Date.now()
  const onKeyPress = (e) => {
    if (e.key === 'c' && Date.now() - overflowTime > hotkeyInterval) {
      console.log(`${hotkeyInterval / 1000} second passed`)
      overflowHandler()
      overflowTime = Date.now()
    }
    if (e.key === 'i' && Date.now() - invertTime > hotkeyInterval) {
      console.log(`${hotkeyInterval / 1000} second passed`)
      invertHandler()
      invertTime = Date.now()
    }
  }

  useKeyPress(['c', 'i'], onKeyPress)

  return (
    <section>
      <h1>HTML5 / CSS3 / Infinite Scroll Banner</h1>

      <div className={classes.options}>
        <h2>Options</h2>
        <div>
          <div>
            <button onClick={overflowHandler}>
              {background ? 'Show' : 'Hide'} Container (c)
            </button>
          </div>
          <div>
            <button onClick={invertHandler}>Invert (i)</button>
          </div>
        </div>
      </div>

      <p className={classes.instructions}>Hover over/tap on to pause</p>

      <div
        className={`${classes.animation} ${
          !background && classes.animationBackground
        }`}
        id="animation"
        style={{
          filter: invert ? 'invert(0)' : 'invert(1)'
        }}
      >
        <div className={classes.partner_banner}>
          <div>
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/picsandbooths.png" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/wlshs.svg" />
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/pandje14.svg" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/kidsdjjoeri.svg" />
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/magsoundandlight.svg" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/tijsvl.svg" />
          </div>
          <div>
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/picsandbooths.png" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/wlshs.svg" />
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/pandje14.svg" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/kidsdjjoeri.svg" />
            <a href="#link-to-partner">
              <img src="https://tijsvl.net/_tmp/ff/magsoundandlight.svg" />
            </a>
            <img src="https://tijsvl.net/_tmp/ff/tijsvl.svg" />
          </div>
        </div>
      </div>

      <p className={classes.note}>
        Made for:
        <br />
        <a
          href="https://www.fluisterfeest.nl/zakelijk"
          target="_blank"
          rel="noreferrer"
        >
          www.fluisterfeest.nl/zakelijk
        </a>
      </p>
    </section>
  )
}

export default CSSPage
