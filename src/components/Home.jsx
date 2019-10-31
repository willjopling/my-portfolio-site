import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "blue",
    position: "fixed",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Hi, I'm Will...</Typography>
    </div>
  );
}
