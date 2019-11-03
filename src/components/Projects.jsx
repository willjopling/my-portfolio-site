import React from "react";
import ProjectNote from "./ProjectNote";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slide } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: "inherit",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slide in="true" direction="left" timeout={700}>
        <div>
          <Typography variant="h1">Projects</Typography>
        </div>
      </Slide>
      <Slide in="true" direction="left" timeout={400}>
        <div>
          <ProjectNote
            title="project 2"
            description="a description about the project"
          />
        </div>
      </Slide>
    </div>
  );
}
