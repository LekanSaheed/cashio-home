import Button from "./Button";
import { BsWhatsapp, BsTwitter, BsTelegram } from "react-icons/bs";
import classes from "./Intro.module.css";
import { motion } from "framer-motion";
const Intro = () => {
  const upSlide = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const btnContVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const btnVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classes.intro_main}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={upSlide}
        className={classes.intro_top}
      >
        <span className={classes.intro_big}>
          <span>Borderless payments</span>
        </span>
        <br />
        <span className={classes.intro_small}>
          <span>
            Send, receive funds, pay bills and make giveaways through Social
            Platforms
          </span>
        </span>
        {/* <div className={classes.intro_xs}>
          <span>No bank account? No problem. With cashio</span>
          <span>
            it’s all about the social platform you are mostly connected to.
          </span>
        </div> */}
      </motion.div>
      <div className={classes.pointer}>Available For</div>
      <motion.div variants={btnContVariant} className={classes.btn_container}>
        <Button
          variant={btnVariant}
          icon={<BsTwitter />}
          text="Twitter"
          animate
        />
        <Button
          variant={btnVariant}
          icon={<BsTelegram />}
          text="Telegram"
          animate
        />
        <Button
          variant={btnVariant}
          icon={<BsWhatsapp />}
          text="Whatsapp"
          animate
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
