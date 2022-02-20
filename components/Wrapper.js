import Header from "./Header";
import Footer from "./Footer";
import classes from "./Wrapper.module.css";
import Intro from "./Intro";
// import Features from "./Features";
import Testimony from "./Testimony";
import HowTo from "./HowTo";
import NoWorries from "./NoWorries";
import dynamic from "next/dynamic";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Image from "next/image";
import pclip from "../public/powerclip.PNG";
import Team from "./Team";
const Home = () => {
  const [open, setOpen] = useState(false);
  const Features = dynamic(() => import("./Features"), {
    ssr: false,
  });
  return (
    <div className={classes.wrapper}>
      <Header open={open} setOpen={setOpen} />
      <MobileNav open={open} setOpen={setOpen} />
      <div className={classes.section}>
        <div className={`${classes.circle} ${classes.circle1}`}></div>
        <div className={`${classes.circle} ${classes.circle2}`}></div>
        <Intro />

        <div className={classes.section_pad}>
          <Features />
          <HowTo />
          <NoWorries />
          <Testimony />
          <Team />
          <div className={classes.img_con}>
            <Image className={classes.clip} layout="responsive" src={pclip} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
