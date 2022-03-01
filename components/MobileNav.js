import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./raws/navLinks";
import Link from "next/link";
import classes from "./MobileNav.module.css";
import { MdClose } from "react-icons/md";
import Button from "./Button";
Import {useRouter} from "next/router"
const MobileNav = ({ open, setOpen }) => {
const router = useRouter()
  const variant = {
    hidden: {
      opacity: 0,
      //   display: "none",
      x: 360,
    },
    visible: {
      opacity: 1,
      //   display: "block",
      x: 0,
      transition: {
        staggerChildren: 0.17,
        type: "tween",
      },
    },
  };
  const childV = {
    hidden: {
      opacity: 0,
      x: 120,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        when: "afterParent",
      },
    },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={classes.container}
          variants={variant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            style={{ textAlign: "right", color: "#000", fontSize: "38px" }}
          >
            <MdClose onClick={() => setOpen(!open)} />
          </motion.div>
          <motion.div variants={variant} className={classes.fluid}>
            {navLinks.map((nav, id) => {
              return (
                <motion.div variants={childV} key={id}>
                  <Link href={"/" + nav.toLowerCase()}>
                    <motion.a>{nav}</motion.a>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justigyContent: "space-between",
              gap: "30px",
              margin: "35px 0 20px 0",
            }}
          >
            <Button
onClick={() => router.push("https://app.mycashiowallet.com/sign-up")}
              sx={{
                height: "63px",
                borderRadius: "50px",
                padding: "17px 40px",
                fontSize: "22px",
                fontFamily: "machinaBold",
              }}
              text="Sign Up"
              iconBc={{ display: "none" }}
            />
            <Link href="https://app.mycashiowallet.com/login">
              <a style={{ color: "#6666ff", fontFamily: "machinaBold" }}>
                Login here
              </a>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileNav;
