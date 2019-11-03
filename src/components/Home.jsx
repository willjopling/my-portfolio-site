import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slide } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  topBanner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    color: "white"
  },
  about: {
    width: "80%",
    overflow: "visible",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  logo: {
    width: "100px",
    height: "100px"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topBanner}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          className={classes.logo}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className={classes.logo}
        />
      </div>
      <Slide in={true} direction="left" timeout={500}>
        <Typography variant="h1" className={classes.title}>
          Hi, I'm Will...
        </Typography>
      </Slide>
      <div className={classes.about}>
        <h4>Front End Developer.</h4>
        <p>
          Since graduating University, I have dedicated as much time as I could
          to learning programming and the challenges that come with developing
          software and have found that there is a lot of similarities between
          software development and media production. In particular the need to
          design, plan and control developing versions and the presentation of
          the final product. The constant need to improve and solve problems as
          the software is developed is something that really appeals to me.
        </p>
      </div>
    </div>
  );
}
