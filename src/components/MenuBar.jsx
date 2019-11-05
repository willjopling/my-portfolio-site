import React, { useState } from "react";
import "../stylesheets/App.css";

import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  icon: {
    color: "white"
  }
});

export default function MenuBar(props) {
  const [selectedOption, setSelectedOption] = useState("home");

  const classes = useStyles();

  return (
    <div>
      <div id="app-container">
        <ul id="menu-bar">
          <li>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setSelectedOption("home");
              }}
              endIcon={<HomeIcon />}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setSelectedOption("projects");
              }}
              endIcon={<BuildIcon />}
            >
              Projects
            </Button>
          </li>
          <li>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setSelectedOption("contact");
              }}
              endIcon={<MailIcon />}
            >
              Contact
            </Button>
          </li>
          <li>
            <div>
              <IconButton>
                <GitHubIcon className={classes.icon} />
              </IconButton>
              <IconButton>
                <LinkedInIcon className={classes.icon} />
              </IconButton>
            </div>
          </li>
        </ul>

        <div id="display-container">{display(selectedOption)}</div>
        <div className="page-background"></div>
      </div>
    </div>
  );
}

const display = props => {
  switch (props) {
    case "projects":
      return (
        <div>
          <Projects />
        </div>
      );

    case "home":
      return (
        <div>
          <Home />
        </div>
      );

    case "contact":
      return (
        <div>
          <Contact />
        </div>
      );
  }
};
