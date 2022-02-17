import classes from "./Features.module.css";
import { motion } from "framer-motion";
const Features = () => {
  const cards = [
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
    {
      title: "Bills",
      main: "Simple and secure social banking, be accessible from social apps",
    },
  ];
  const contVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const slide = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const boxVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
      borderRadius: ["20px", "10px", "12px"],
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: ["0", "20", "0"],
      borderRadius: ["20px", "10px", "12px"],
    },
  };
  const cardVariant = {
    hidden: {
      opacity: 0,
      x: 10,
      //   display: "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      //   display: "block",
    },
  };
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={contVariant}
      className={classes.container}
    >
      {/* <div className={classes.header}>Features</div> */}
      <motion.div className={classes.fluid}>
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={contVariant}
          className={classes.card_container}
        >
          <motion.div variants={cardVariant} className={classes.card_border}>
            <motion.div className={classes.card}>
              Cashio Aggregates all your connected social media friends and
              customers in a place and allows users easily discover them when
              sending or requesting for money, with easy interactions with our
              financial bot, for each social media platform.
            </motion.div>
          </motion.div>
          <svg height="210" width="70">
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              style={{ stroke: "rgb(255, 255,255)", strokeWidth: 2 }}
            />
          </svg>

          <motion.div variants={cardVariant} className={classes.card}>
            System infrastructure for sending and receiving money easily between
            friends, family and customers through their most used social media
            platform
          </motion.div>

          {/* {cards.map((card, id) => {
          return (
            <motion.div
              variants={cardVariant}
              className={classes.card}
              key={id}
            >
              <div>{card.main}</div>
            </motion.div>
          );
        })} */}
        </motion.div>
        <svg
          height="210"
          width="20"
          style={{ position: "relative", left: "-73px", top: "-45px" }}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="37"
            style={{ stroke: "rgb(255, 255,255)", strokeWidth: 2 }}
          />
        </svg>
        <div className={classes.card_container2}>
          <motion.div variants={cardVariant} className={classes.card2}>
            Cashio composes of physical and virtual resources that support the
            flow, storage, processing and analysis of data when any activities
            is carried out
          </motion.div>
          <div className={classes.seperator}>
            <svg
              height="10"
              width="120"
              style={{ position: "relative", top: "-50px" }}
            >
              <line
                x1="0"
                y1="0"
                x2="200"
                y2="0"
                style={{
                  stroke: "rgb(255, 255,255)",
                  strokeWidth: 2,
                }}
              />
            </svg>
            <svg height="10" width="120">
              <line
                x1="0"
                y1="0"
                x2="200"
                y2="0"
                style={{ stroke: "rgb(255, 255,255)", strokeWidth: 2 }}
              />
            </svg>
          </div>
          <motion.img
            variants={cardVariant}
            className={classes.card3}
            src="/feature.PNG"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
