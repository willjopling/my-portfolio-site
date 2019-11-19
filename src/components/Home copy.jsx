import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slide, Fade } from "@material-ui/core";
import "../stylesheets/App.css";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    marginLeft: "2em",
    marginRight: "3em",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    overflow: "auto",
    boxSizing: "border-box"
  },
  banner: {
    justifySelf: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    padding: "10px"
  },
  about: {
    justifySelf: "center",
    width: "70%",
    overflow: "visible",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  logo: {
    width: "100px",
    height: "100px",
    "&:hover": {
      width: "120px",
      height: "120px"
    },
    transition: "1s ease ",
    alignSelf: "flex-end"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slide in={true} direction="left" timeout={800}>
        <Typography variant="h1" className={classes.title}>
          Hi, I'm Will...
        </Typography>
      </Slide>

      <Slide in="true" direction="left" timeout={1200}>
        <div className={classes.about}>
        <h4>Front End Developer.</h4>
          <p style={{ fontSize: "1em" }}>
            Since graduating University, I have dedicated as much time as I
            could to learning programming and the challenges that come with
            developing software and have found that there is a lot of
            similarities between software development and media production. In
            particular the need to design, plan and control developing versions
            and the presentation of the final product. The constant need to
            improve and solve problems as the software is developed is something
            that really appeals to me.
          </p>
        </div>
      </Slide>
      <Slide in={true} direction="left" timeout={1600}>
        <div className={classes.banner}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            className={classes.logo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className={classes.logo}
          />
        </div>
      </Slide>
    </div>
  );
}
