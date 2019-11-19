import React, { useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${css`
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style-type: none;
  background-color: light-blue;

  ${css`
    @media (max-width: 800px) {
      position: relative;
      flex-direction: row;
      justify-content: space-between;
    }
  `};
`;

const DisplayContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 10;
`;

export default function MenuBar(props) {
  const [selectedOption, setSelectedOption] = useState("home");

  return (
    <Container>
      <Menu>
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
            <IconButton href={"https://github.com/willjopling"}>
              <GitHubIcon />
            </IconButton>
            <IconButton href={"https://www.linkedin.com/in/william-jopling/"}>
              <LinkedInIcon />
            </IconButton>
          </div>
        </li>
      </Menu>

      <DisplayContainer>{display(selectedOption)}</DisplayContainer>
      <div className="page-background"></div>
    </Container>
  );
}

const display = selectedOption => {
  switch (selectedOption) {
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
