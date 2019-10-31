import React from "react";
import ProjectNote from "./ProjectNote";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: "inherit",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    background: "blue"
  }
});

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1">Projects</Typography>
      </div>
      <div>
        <ProjectNote
          title="project 2"
          description="a description about the project"
        />
      </div>
    </div>
  );
}
