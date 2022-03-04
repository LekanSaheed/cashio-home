import classes from "./Button.module.css";
import { motion } from "framer-motion";
const Button = ({ icon, text, variant, sx, props, iconBc, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      variants={variant}
      className={classes.btn}
      style={sx}
    >
      <span style={iconBc}>{icon}</span>
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
