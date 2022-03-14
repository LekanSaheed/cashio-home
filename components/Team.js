import Avatar from "./Avatar";
import classes from "./Team.module.css";
import { motion } from "framer-motion";
import solo from "../public/solo.jpg";
import chuks from "../public/chuks.jpg";
import saheed from "../public/me.JPG";
const Team = () => {
  const team = [
    { imgSrc: null, name: "John Harnie Paul", role: "Back End Dev" },
    { imgSrc: solo, name: "John Harnie Solomon", role: "Creative" },
    { imgSrc: saheed, name: "Lekan Saheed", role: "Front End Dev" },

    { imgSrc: null, name: "Solomon Koom", role: "Lead Creative Designer" },
    { imgSrc: null, name: "Josh", role: "Bank End Dev" },
    { imgSrc: chuks, name: "Chuks Ojugo", role: "QA Tester" },
    { imgSrc: null, name: "Emmanuel", role: "Back End Dev" },
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
