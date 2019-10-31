import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    background: "blue",
    position: "fixed",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1>Contact</h1>
      </div>
      <div>
        <form className={classes.messageContainer}>
          <TextField id="standard-basic" label="Email" />
          <TextField id="standard-multiline-flexible" label="Message" />
        </form>
      </div>
    </div>
  );
}
