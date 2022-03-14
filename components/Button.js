import classes from "./Button.module.css";
import { motion } from "framer-motion";
const Button = ({ icon, text, variant, sx, iconBc, onClick, animate }) => {
  return (
    <motion.button
      onClick={onClick}
      variants={variant}
      className={`${classes.btn} ${animate ? classes.lin_anim : undefined}`}
      style={{ ...sx, paddingLeft: animate && "4px" }}
    >
      <span className={animate ? classes.animCon : undefined} style={iconBc}>
        {icon}
      </span>
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
