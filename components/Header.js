import { navLinks } from "./raws/navLinks";
import { motion } from "framer-motion";
import classes from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  const variant = {
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
  const slideIn = {
    hidden: {
      opacity: 0,
      x: 30,
      //   display: "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      display: "block",
    },
  };
  return (
    <motion.div
      className={classes.header_container}
      initial="hidden"
      whileInView="visible"
      variants={variant}
    >
      <motion.div className={classes.logo} variants={variant}>
        <img src="/cashioWhite.PNG" />
      </motion.div>
      <motion.div variants={variant} className={classes.link_container}>
        {navLinks.map((link, id) => {
          return (
            <motion.div key={id} variants={variant}>
              <Link href={`/${link.toLowerCase()}`}>
                <a>{link}</a>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className={classes.btn_cont}>
        <motion.button variants={slideIn}>Sign Up</motion.button>
      </motion.div>
      <div className={classes.menu_bar}>Bar</div>
    </motion.div>
  );
};

export default Header;
