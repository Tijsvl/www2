import classes from './WebDeveloper.module.scss'

const WebDeveloper = (props) => {
  return <div className={classes.list}>{props.children}</div>
}

export default WebDeveloper
