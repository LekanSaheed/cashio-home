import classes from "./Button.module.css";
import { motion } from "framer-motion";
const Button = ({ icon, text, variant, sx, props, iconBc }) => {
  return (
    <motion.button
      variants={variant}
      className={classes.btn}
      style={sx}
      {...props}
    >
      <span style={iconBc}>{icon}</span>
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
