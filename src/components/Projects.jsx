import React from "react";
import ProjectNote from "./ProjectNote";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slide } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "2em",
    boxSizing: "border-box"
  },

  projectsBanner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",

    width: "80%"
  }
});

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slide in="true" direction="left" timeout={800}>
        <div>
          <Typography variant="h1">Projects</Typography>
        </div>
      </Slide>
      <Slide in="true" direction="left" timeout={1200}>
        <div className={classes.projectsBanner}>
          <ProjectNote
            title="DND Character Sheet"
            description="An online character sheet for the table top board game 'Dungeons and Dragons'."
            source={require("./untit.jpg")}
          />
          <ProjectNote
            title="Language Learners News Reader"
            description="A news reader that retrieves news from different sources around the world"
          />
        </div>
      </Slide>
    </div>
  );
}
