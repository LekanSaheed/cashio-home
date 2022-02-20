import Image from "next/image";
import classes from "./Avatar.module.css";
import { motion } from "framer-motion";
const Avatar = ({ imgSrc, name, role }) => {
  const variant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 1,
    },
  };
  return (
    <motion.div variants={variant} className={classes.container}>
      <div style={{ background: !imgSrc && "#fff" }} className={classes.avatar}>
        {!imgSrc ? (
          <img />
        ) : (
          <Image
            objectFit="cover"
            src={imgSrc}
            layout="fixed"
            height={200}
            width={200}
            priority
            quality={100}
          />
        )}
      </div>
      <div>
        <div className={classes.name}>{name}</div>
        <div className={classes.role}>{role}</div>
      </div>
    </motion.div>
  );
};

export default Avatar;
