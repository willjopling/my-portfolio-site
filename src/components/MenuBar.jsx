import React, { useState } from "react";
import "../stylesheets/App.css";

import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import Projects from "./Projects";

const useStyles = makeStyles({
  icon: {
    color: "blue"
  }
});

export default function MenuBar(props) {
  const [selectedOption, setSelectedOption] = useState("projects");

  const classes = useStyles();

  return (
    <div id="app-container">
      <ul id="menu-bar">
        <li>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </li>
        <li>
          <BuildIcon />
        </li>
        <li>
          <MailIcon />
        </li>
      </ul>
      <div id="display-container">{display(selectedOption)}</div>
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
  }
};
