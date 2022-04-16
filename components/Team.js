import Avatar from "./Avatar";
import classes from "./Team.module.css";
import { motion } from "framer-motion";
import solo from "../public/solo.jpg";
import chuks from "../public/chuks.jpg";
import koom from "../public/koom.jpg";
import saheed from "../public/me.JPG";
import josh from "../public/josh.jpg";
import daemon from "../public/daemon.jpg";
import paul from "../public/paul.jpg";
const Team = () => {
  const team = [
    { imgSrc: paul, name: "John Harnie Paul", role: "Co-Founder & CEO" },
    { imgSrc: solo, name: "John Harnie Solomon", role: "Co-Founder & COO" },
    { imgSrc: daemon, name: "Emmanuel", role: "Co-Founder & Backend" },
    { imgSrc: josh, name: "Josh", role: "CTO & Backend " },
    { imgSrc: saheed, name: "Lekan Saheed", role: "Frontend" },
    { imgSrc: koom, name: "Solomon Koom", role: "Creative Designer" },
    { imgSrc: chuks, name: "Chuks Ojugo", role: "Q&A" },
  ];
  const Cvariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={Cvariant}
      className={classes.grid}
    >
      {team.map((member, id) => {
        return (
          <Avatar
            key={id}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role}
          />
        );
      })}
    </motion.div>
  );
};

export default Team;
