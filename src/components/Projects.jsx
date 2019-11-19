import React from "react";
import ProjectNote from "./ProjectNote";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Typography, Slide } from "@material-ui/core";

const Container = styled.div`
  margin-left: 1em;
  margin-top: 1em;
  width: 95%;

  font-size: 1.5em;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${css`
    @media (max-width: 800px) {
      text-align: center;
      margin: auto;
      padding: 1em;
      height: 100%;
    }
  `}
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${css`
    @media (max-width: 800px) {
      margin: auto;
      padding: 1em;
      flex-direction: column;
    }
  `};
`;

const Projects = () => (
  <Container>
    <Slide in="true" direction="left" timeout={800}>
      <Typography variant="h1">Projects</Typography>
    </Slide>
    <Slide in="true" direction="left" timeout={1200}>
      <ProjectsContainer>
        <ProjectNote
          title="DND Character Sheet"
          description="An online character sheet for the table top board game 'Dungeons and Dragons'."
          source={require("../assets/dndcharsheet.png")}
          siteLink={"https://hopeful-bell-1ed5fd.netlify.com/"}
          repo={"https://github.com/willjopling/dnd-Character-Sheet"}
        />

        <ProjectNote
          title="Language Learners News Reader"
          description="A news reader that retrieves news from different sources around the world"
          source={require("../assets/languagelearnersnews.png")}
          siteLink={"https://language-learners-news.herokuapp.com/"}
          repo={"https://github.com/willjopling/language-learners-news-reader"}
        />
      </ProjectsContainer>
    </Slide>
  </Container>
);

export default Projects;
