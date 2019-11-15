import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Paper, Slide, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",

    marginLeft: "2em"
  },
  title: {
    fontSize: "50px"
  },

  msgNote: {
    padding: "10px",
    width: "300px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#1a1a1a"
  },
  sendButton: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    border: "1px solid",
    borderRadius: "10%",
    color: "#3f51b5",
    padding: "5px",

    "&:hover": {
      backgroundColor: "rgba(63, 81, 181, 0.6)",
      cursor: "pointer"
    },

    transition: ".5s ease"
  },

  msgInput: {
    padding: "10px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px solid  #a6a6a6",
    background: "#4d4d4d",
    color: "#a6a6a6"
  },

  message: {
    background: "#4d4d4d",
    border: "none",
    height: "50%",
    padding: "5px",
    color: "#a6a6a6",
    fontFamily: "arial"
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={classes.root}>
      <div clasName={classes.backgroundElements}></div>

      <div>
        <Slide in="true" direction="left" timeout={1200}>
          <Typography variant="h1" className={classes.title}>
            Get in touch...
          </Typography>
        </Slide>
      </div>

      <div>
        <Slide in="true" direction="left" timeout={1400}>
          <form name="contact" method="post" className={classes.msgNote}>
            <input type="hidden" name="form-name" value="contact" />

            <input
              className={classes.msgInput}
              placeholder="name"
              name="name"
            ></input>

            <input
              className={classes.msgInput}
              placeholder="email"
              name="email"
            ></input>

            <textarea
              placeholder="message"
              className={classes.message}
            ></textarea>
            <button className={classes.sendButton} type="submit">
              Send
            </button>
          </form>
        </Slide>
      </div>
    </div>
  );
}
