import React from "react";
import ProjectNote from "./ProjectNote";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: "inherit",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "blue"
  }
});

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProjectNote
        title="project 2"
        description="a description about the project"
      />
    </div>
  );
}
