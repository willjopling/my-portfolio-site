import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Paper, Slide, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
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
  },

  msgNote: {
    padding: theme.spacing(3, 2),
    width: "500px",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Slide in="true" direction="left" timeout={600}>
          <Typography variant="h1">Contact</Typography>
        </Slide>
      </div>
      <div>
        <form>
          <Slide in="true" direction="left" timeout={500}>
            <Paper className={classes.msgNote}>
              <TextField id="standard-basic" label="Email" />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Paper>
          </Slide>
        </form>
      </div>
    </div>
  );
}
