import classes from "./Features.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../public/feature.png";
import notify from "../public/notify.png";
import badge from "../public/badge.png";
import LineTo from "react-lineto";
import SteppedLine from "react-lineto";
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
      x: 30,
      //   display: "none",
    },
    visible: {
      opacity: [0, 1],
      x: 0,
      transition: {
        stiffness: 100,
        when: "afterParent",
        duration: 1,
        damping: 100,
        type: "tween",
      },
      //   display: "block",
    },
  };
  const card2Variant = {
    hidden: {
      opacity: 0,
      x: -30,

      //   display: "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        stiffness: 100,
        when: "afterParent",
        duration: 1,
        type: "tween",
        damping: 120,
      },
    },
  };
  const imgV = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };
  const badgeN = {
    hidden: {
      opacity: 0,

      x: -40,

      scale: 0,
    },
    visible: {
      opacity: 1,

      x: 0,
      scale: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  const note = {
    hidden: {
      opacity: 0,
      y: 220,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={contVariant}
      className={classes.container}
    >
      {/* Main Container */}

      <motion.div className={classes.fluid}>
        <motion.div
          // whileInView="visible"
          // initial="hidden"
          // variants={contVariant}
          className={`${classes.card_container}`}
        >
          <motion.div
            variants={cardVariant}
            whileInView="visible"
            className={`${classes.card} A`}
            // className={classes.card}
          >
            Cashio Aggregates all your connected social media friends and
            customers in a place and allows users easily discover them when
            sending or requesting for money, with easy interactions with our
            financial bot, for each social media platform.
          </motion.div>

          <div
            style={{ textAlign: "center" }}
            className={classes.vertical_line}
          >
            <svg height="35" width="2">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="1000"
                style={{
                  stroke: "rgb(255, 255,255)",
                  strokeWidth: 3,
                }}
              />
            </svg>
          </div>
          <motion.div
            variants={card2Variant}
            whileInView="visible"
            className={`${classes.card2} B`}
          >
            Cashio composes of physical and virtual resources that support the
            flow, storage, processing and analysis of data when any activities
            is carried out
          </motion.div>
        </motion.div>

        <div className={classes.seperator}>
          <svg height="10" width="auto" className={classes.top_seperator}>
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
          <div className={classes.seperator_node}>
            <div
              className={classes.line_arm}
              style={{
                position: "relative",

                display: "flex",
                transform: "rotateX(3.25rad)",
                zIndex: "0",
              }}
            >
              <svg height="50" width="1">
                <line
                  x1="0"
                  y1="1000"
                  x2="0"
                  y2="0"
                  style={{
                    stroke: "rgb(255, 255,255)",
                    strokeWidth: 2,
                  }}
                />
              </svg>
              <svg height="10" width="auto">
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
            </div>
            <svg height="10" width="auto">
              <line
                x1="0"
                y1="0"
                x2="200"
                y2="0"
                style={{ stroke: "rgb(255, 255,255)", strokeWidth: 2 }}
              />
            </svg>
          </div>
        </div>
        <div style={{ textAlign: "center" }} className={classes.vertical_line}>
          <svg height="35" width="2">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="1000"
              style={{
                stroke: "rgb(255, 255,255)",
                strokeWidth: 3,
              }}
            />
          </svg>
        </div>
        <div className={`${classes.card_container2}`}>
          <motion.div variants={cardVariant} className={`${classes.card4} C`}>
            System infrastructure for sending and receiving money easily between
            friends, family and customers through their most used social media
            platform
          </motion.div>
          <div
            style={{ textAlign: "center" }}
            className={classes.vertical_line}
          >
            <svg height="35" width="2">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="1000"
                style={{
                  stroke: "rgb(255, 255,255)",
                  strokeWidth: 3,
                }}
              />
            </svg>
          </div>
          <motion.div
            whileInView="visible"
            variants={imgV}
            className={`${classes.card3} D`}
          >
            <motion.div
              variants={note}
              whileInView="visible"
              className={classes.notify}
            >
              {" "}
              <Image
                src={notify}
                layout="fixed"
                objectFit="contain"
                quality={100}
                priority
              />
            </motion.div>
            <Image
              src={img}
              alt="person"
              layout="responsive"
              quality={100}
              priority
            />
            <motion.div
              variants={badgeN}
              whileInView="visible"
              className={classes.badge}
            >
              {" "}
              <Image
                src={badge}
                layout="fixed"
                objectFit="contain"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        {/* <SteppedLine
          fromAnchor="top right"
          from="B"
          to="D"
          toAnchor="bottom left"
          borderWidth="3px"
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default Features;
