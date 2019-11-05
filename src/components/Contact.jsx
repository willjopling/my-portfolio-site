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
    alignItems: "center"
  },
  title: {
    "&:before": {
      content: '"<h1>"',
      fontSize: "14px",
      display: "block"
    },

    fontSize: "50px"
  },

  msgNote: {
    padding: "10px",
    width: "500px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "#1a1a1a"
  },
  sendButton: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    border: "1px solid",
    borderRadius: "10%",
    color: "#ff1a1a",
    padding: "5px",

    "&:hover": {
      backgroundColor: "#ff4d4d"
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
          <h1 variant="h1" className={classes.title}>
            Contact
          </h1>
        </Slide>
      </div>
      <div>
        <Slide in="true" direction="left" timeout={1400}>
          <div className={classes.msgNote}>
            <input className={classes.msgInput} placeholder="name"></input>

            <input className={classes.msgInput} placeholder="email"></input>

            <textarea
              placeholder="message"
              className={classes.message}
            ></textarea>
            <button className={classes.sendButton}>Send</button>
          </div>
        </Slide>
      </div>
    </div>
  );
}
