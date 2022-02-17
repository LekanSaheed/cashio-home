import Header from "./Header";
import Footer from "./Footer";
import classes from "./Wrapper.module.css";
import Intro from "./Intro";
import Features from "./Features";
import Explanation from "./Explanation";
import HowTo from "./HowTo";
import NoWorries from "./NoWorries";
const Home = () => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.clip} src="/powerclip.PNG" />
      <Header />
      <div className={classes.section}>
        <div className={`${classes.circle} ${classes.circle1}`}></div>
        <div className={`${classes.circle} ${classes.circle2}`}></div>
        <Intro />

        <div className={classes.section_pad}>
          <Features />
          <HowTo />
          <NoWorries />
          <Explanation />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
