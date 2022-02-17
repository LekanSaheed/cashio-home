import Button from "./Button";
import classes from "./HowTo.module.css";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
const HowTo = () => {
  const how_tos = [
    {
      title: "Register In Minutes",
      details: "Sign up online, or in our mobile app with your email address.",
    },
    {
      title: "Verify",
      details: "Verify your account through an OTP from your account.",
    },
    {
      title: "Send and Receive",
      details: "Go on, send and receive money from your social handles.",
    },
  ];
  return (
    <div className={classes.container_border}>
      <div className={classes.container}>
        <div className={classes.header}>How to create an account</div>
        <div className={classes.inner_container}>
          {how_tos.map((card, id) => {
            return (
              <div key={id} className={classes.card}>
                <div className={classes.index_border}>
                  <div className={classes.index}>{id + 1}</div>
                </div>
                <div className={classes.card_main}>
                  <div className={classes.title}>{card.title}</div>
                  <div classname={classes.free_space}>{card.details}</div>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          text="Get Started"
          iconBc={{ background: "transparent", color: "#fff" }}
          icon={<BsArrowRightCircle />}
          sx={{
            flexDirection: "row-reverse",
            height: "40px",
            padding: "12px 18px",
          }}
        />
      </div>
    </div>
  );
};

export default HowTo;
