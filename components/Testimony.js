import classes from "./Testimony.module.css";

const Explanation = () => {
  const arr = [
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
  ];
  return (
    <div className={classes.container}>
      {arr.map((card, id) => {
        return (
          <div key={id} className={classes.card_border}>
            <div className={classes.card_main}>
              <div>{card.title}</div>
              <div>{card.main}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explanation;
