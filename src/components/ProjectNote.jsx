import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    width: "300px",
    height: "250px"
  },

  image: {
    display: "inline-block",
    verticalAlign: "middle"
  },

  slideInContent: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(102, 179, 255, 0.8)",
    padding: "20px",
    boxSizing: "border-box"
  },
  btnContainer: {
    marginBottom: "10px"
  }
});

export default function ProjectNote(props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classes.root}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <Collapse in={hover}>
        <div className={classes.slideInContent}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <div className={classes.btnContainer}>
            <Button variant="outlined" color="secondary">
              Live Site
            </Button>
            <Button variant="outlined" color="secondary">
              Repo
            </Button>
          </div>
        </div>
      </Collapse>
      <img src={require("./untit.jpg")} className={classes.image}></img>
    </div>
  );
}
