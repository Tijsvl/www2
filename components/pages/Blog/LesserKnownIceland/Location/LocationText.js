import classes from './LocationText.module.scss'

const LocationText = ({ text, note, footnote }) => {
  return (
    <div className={classes.text}>
      {text && <div className={classes.main} dangerouslySetInnerHTML={{ __html: text }} />}
      {note && <aside className={classes.note} dangerouslySetInnerHTML={{ __html: note }} />}
      {footnote && <aside className={classes.footnote} dangerouslySetInnerHTML={{ __html: footnote }} />}
    </div>
  )
}

export default LocationText
