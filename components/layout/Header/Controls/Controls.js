import UserLogin from './UserLogin'
import Theme from './Theme'
import classes from './Controls.module.scss'

const Controls = () => {
  return (
    <div className={classes.controls} data-identifier="layout-element">
      <UserLogin />
      <Theme />
    </div>
  )
}

export default Controls
