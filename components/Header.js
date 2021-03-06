import { navLinks } from "./raws/navLinks";
import { motion } from "framer-motion";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/cashioWhite.png";
import { useRouter } from "next/router";
const Header = ({ setOpen, open }) => {
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
  const router = useRouter();
  return (
    <motion.div
      className={classes.header_container}
      initial="hidden"
      whileInView="visible"
      variants={variant}
    >
      <motion.div className={classes.logo} variants={variant}>
        <Image
          src={logo}
          layout="fixed"
          objectFit="contain"
          quality={100}
          priority
        />
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
        <motion.button
          onClick={() => router.push("https://app.mycashiowallet.com/sign-up")}
          variants={slideIn}
        >
          Sign Up
        </motion.button>
        <motion.button
          variants={slideIn}
          onClick={() => router.push("https://app.mycashiowallet.com/login")}
        >
          Login
        </motion.button>
      </motion.div>
      <div className={classes.menu_bar} onClick={() => setOpen(!open)}>
        {/* <HiMenuAlt3 /> */}
        <div className={`${classes.bar} ${classes.bar1}`}></div>
        <div className={`${classes.bar} ${classes.bar2}`}></div>
        <div className={`${classes.bar} ${classes.bar3}`}></div>
      </div>
    </motion.div>
  );
};

export default Header;
