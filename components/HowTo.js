import Button from "./Button";
import classes from "./HowTo.module.css";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const HowTo = () => {
  const how_tos = [
    {
      title: "Register In Minutes",
      details: "Sign up online, or in our mobile app with your email address.",
    },
    {
      title: "Verify",
      details: "Verify your account through an OTP from your account.",
    },
    {
      title: "Send and Receive",
      details: "Go on, send and receive money from your social handles.",
    },
  ];
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const iconVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "afterParent",
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
      className={classes.container_border}
    >
      <motion.div variants={containerVariant} className={classes.container}>
        <div className={classes.header}>How to create an account</div>
        <motion.div
          variants={containerVariant}
          className={classes.inner_container}
        >
          {how_tos.map((card, id) => {
            return (
              <motion.div
                variants={childVariant}
                key={id}
                className={classes.card}
              >
                <motion.div
                  variants={iconVariant}
                  className={classes.index_border}
                >
                  <div className={classes.index}>{id + 1}</div>
                </motion.div>
                <div className={classes.card_main}>
                  <div className={classes.title}>{card.title}</div>
                  <div className={classes.free_space}>{card.details}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <Button
          text="Get Started"
          iconBc={{ background: "transparent", color: "#fff" }}
          icon={<BsArrowRightCircle />}
          sx={{
            flexDirection: "row-reverse",
            height: "40px",
            padding: "12px 18px",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HowTo;
