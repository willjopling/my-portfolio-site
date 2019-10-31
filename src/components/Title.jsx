import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../stylesheets/App.css";

const useStyles = makeStyles({
  root: {}
});

const Title = props => {
  const classes = useStyles();

  return (
    <div>
      <div className="title-container">
        <Typography className={classes.title} variant="h1">
          Will
        </Typography>
        <div>
          <div>
            <a href="https://github.com/">
              <GitHubIcon />
            </a>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Title;
