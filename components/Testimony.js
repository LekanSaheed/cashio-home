import classes from "./Testimony.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Explanation = () => {
  const arr = [
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
    { title: "Lorem", main: "Ipsum sitdet armor" },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: "100px",S
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>Hear from some of our users</div>
      <Slider {...settings}>
        {/* <div> */}
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
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default Explanation;
