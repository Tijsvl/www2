import { useState } from 'react'
import useKeyPress from '../../../../../hooks/useKeyPress'
import classes from './animation-1.module.scss'

const CSSPage = () => {
  const [overflow, setOverflow] = useState(false)
  const [color, setColor] = useState(true)
  const [background, setBackground] = useState(false)

  const overflowHandler = () => {
    setOverflow(!overflow)
    setBackground(!background)
  }
  const colorHandler = () => {
    setColor(!color)
  }

  const hotkeyInterval = 600 // ms
  let overflowTime = Date.now()
  let colorTime = Date.now()
  const onKeyPress = (e) => {
    if (e.key === 'o' && Date.now() - overflowTime > hotkeyInterval) {
      console.log(`${hotkeyInterval / 1000} second passed`)
      overflowHandler()
      overflowTime = Date.now()
    }
    if (e.key === 'c' && Date.now() - colorTime > hotkeyInterval) {
      console.log(`${hotkeyInterval / 1000} second passed`)
      setColor(!color)
      colorTime = Date.now()
    }
  }

  useKeyPress(['o', 'c'], onKeyPress)

  return (
    <section>
      <h1>CSS / Animation 1</h1>

      <div className={classes.options}>
        <h2>Options</h2>
        <div>
          <div>
            <button onClick={overflowHandler}>
              {!overflow ? 'Show' : 'Hide'} Overflow (o)
            </button>
          </div>
          <div>
            <button onClick={colorHandler}>
              {!color ? 'Color' : 'Black & White'} (c)
            </button>
          </div>
        </div>
      </div>

      <p className={classes.instructions}>Hover over/tap on the center</p>

      <div
        className={`${classes.animation} ${
          !background && classes.animationBackground
        }`}
        id="animation"
        style={{
          overflow: overflow ? 'visible' : 'hidden',
          filter: color ? 'grayscale(0)' : 'grayscale(1)'
        }}
      >
        <div
          className={classes.loader}
          // onMouseEnter={hoverHandler}
          // onMouseLeave={hoverHandler}
        >
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 4 }}></span>
          <span style={{ '--i': 5 }}></span>
          <span style={{ '--i': 6 }}></span>
          <span style={{ '--i': 7 }}></span>
          <span style={{ '--i': 8 }}></span>
          <span style={{ '--i': 9 }}></span>
          <span style={{ '--i': 10 }}></span>
        </div>
      </div>

      <p className={classes.note}>
        Inspired by:
        <br />
        <a
          href="https://www.udemy.com/course/infinity-creative-css-animation-course/"
          target="_blank"
          rel="noreferrer"
        >
          www.udemy.com/course/infinity-creative-css-animation-course/
        </a>
      </p>
    </section>
  )
}

export default CSSPage
