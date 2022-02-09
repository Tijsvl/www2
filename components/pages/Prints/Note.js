import classes from './Note.module.scss';

const Note = () => {
  return (
    <div className={classes.note}>
      <p>
        *For standard photo size, larger sizes available.
        <br />
        Shipping not included.
      </p>
      <p>
        *Photos are custom printed and sent, with the exception of USA, Canada, United Kingdom and Ireland to
        avoid disproportionately high shipping costs.
        <br />
        All payments via www.bigcartel.com or its affiliates.
      </p>
    </div>
  );
};

export default Note;
