import classes from "./NoWorries.module.css";
import { CgBolt } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import Image from "next/image";
import img from "../public/imgr.png";
import { motion } from "framer-motion";
const NoWorries = () => {
  const Icon = ({ icon, sx }) => {
    return (
      <motion.div className={classes.icon_border}>
        <div className={classes.icon_main} style={sx}>
          {icon}
        </div>
      </motion.div>
    );
  };
  const arr = [
    {
      title: "Fast",
      details: "Say the magic word and the money will appear.",
      icon: <CgBolt />,
    },
    {
      title: "Safe and Secure",
      details:
        "Securely send and request money from friends and customers accross social media.",
      icon: <RiSafeLine />,
    },
  ];
  const contV = {
    hidden: {
      opacity: 0,
      x: 120,
      // display: "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      // display: "flex",
      transition: {
        // type: "tween",
        // duration: 0.7,
      },
    },
  };
  const cont2v = {
    hidden: {
      opacity: 0,
      x: -120,
      // display: "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      // display: "flex",
      transition: {
        // type: "tween",
        // duration: 0.6,
      },
    },
  };
  const childV = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div className={classes.container}>
      <motion.div
        variants={cont2v}
        initial="hidden"
        whileInView="visible"
        className={classes.img_con}
      >
        <Image
          src={img}
          alt="person"
          layout="responsive"
          quality={90}
          priority
        />
      </motion.div>
      <motion.div
        variants={contV}
        whileInView="visible"
        initial="hidden"
        className={classes.main}
      >
        <motion.div className={classes.header}>No need to worry</motion.div>
        {arr.map((card, id) => {
          return (
            <motion.div className={classes.card} key={id}>
              <Icon
                icon={card.icon}
                sx={{ fontSize: card.title !== "Fast" && "14px" }}
              />
              <div className={classes.card_title}>{card.title}</div>
              <div>{card.details}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default NoWorries;
