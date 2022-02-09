import ReactHtmlParser from 'react-html-parser';

import classes from './LocationText.module.scss';

const LocationText = (props) => {
  return (
    <div className={classes.text}>
      {props.text && <div className={classes.main}>{ReactHtmlParser(props.text)}</div>}
      {props.note && <aside className={classes.note}>{ReactHtmlParser(props.note)}</aside>}
      {props.footnote && <aside className={classes.footnote}>{ReactHtmlParser(props.footnote)}</aside>}
    </div>
  );
};

export default LocationText;
