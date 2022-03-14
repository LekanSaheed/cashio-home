import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logoColor.png";
import { navLinks } from "./raws/navLinks";
const Footer = () => {
  const newLinks = [...navLinks, "Privacy Policy", "Terms and conditions"];
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Image layout="fixed" src={logo} objectFit="contain" />
      </div>
      <div className={classes.link_container}>
        {newLinks.map((nav, id) => {
          return (
            <Link href={"/" + nav.toLowerCase()} key={id}>
              {nav}
            </Link>
          );
        })}
      </div>
      <div className={classes.copyright}>
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
