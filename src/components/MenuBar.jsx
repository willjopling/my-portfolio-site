import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";

const MenuBar = () => {
  const [selectedOption, setSelectedOption] = useState("home");

  const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    ${css`
      @media (max-width: 800px) {
        flex-direction: column;
      }
    `}
  `;

  const MenuContainer = styled.div`
    background: #1a1a1a;
    left: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${css`
      @media (max-width: 800px) {
        flex-direction: row;
        max-height: 4em;
      }
    `}
  `;

  const DisplayContainer = styled.div`
    flex: 7;
    display: block;

    ${css`
      @media (max-width: 800px) {
        overflow-y: scroll;
      }
    `}
  `;

  return (
    <Container>
      <MenuContainer>
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

        <div style={{ justifySelf: "flex-end" }}>
          <IconButton
            style={{ color: "white" }}
            href={"https://github.com/willjopling"}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            href={"https://www.linkedin.com/in/william-jopling/"}
          >
            <LinkedInIcon />
          </IconButton>
        </div>
      </MenuContainer>
      <DisplayContainer>{display(selectedOption)}</DisplayContainer>
    </Container>
  );
};

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

export default MenuBar;
