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
  return (
    <motion.div className={classes.container}>
      <motion.div className={classes.img_con}>
        <Image
          src={img}
          alt="person"
          layout="responsive"
          quality={90}
          priority
        />
      </motion.div>
      <motion.div className={classes.main}>
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
