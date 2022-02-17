import classes from "./NoWorries.module.css";
import { CgBolt } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import Image from "next/image";
import img from "../public/imgr.png";
const NoWorries = () => {
  const Icon = ({ icon, sx }) => {
    return (
      <div className={classes.icon_border}>
        <div className={classes.icon_main} style={sx}>
          {icon}
        </div>
      </div>
    );
  };
  const arr = [
    {
      title: "Fast",
      details: "Say the magic word and the money will appear.",
      icon: <CgBolt />,
    },
    {
      title: "Safe and Secure",
      details:
        "Securely send and request money from friends and customers accross social media.",
      icon: <RiSafeLine />,
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.img_con}>
        <Image
          src={img}
          alt="person"
          layout="responsive"
          quality={90}
          priority
        />
      </div>
      <div className={classes.main}>
        <div className={classes.header}>No need to worry</div>
        {arr.map((card, id) => {
          return (
            <div className={classes.card} key={id}>
              <Icon
                icon={card.icon}
                sx={{ fontSize: card.title !== "Fast" && "14px" }}
              />
              <div className={classes.card_title}>{card.title}</div>
              <div>{card.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoWorries;
