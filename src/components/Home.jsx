import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { Typography, Slide, Fade } from "@material-ui/core";

const Container = styled.div`
  margin-left: 1em;
  margin-top: 1em;
  width: 90%;

  font-size: 1.5em;

  ${css`
    @media (max-width: 800px) {
      text-align: center;
      margin: auto;
      padding: 1em;
    }
  `}
`;

const Home = () => (
  <Container>
    <Slide in={true} direction="left" timeout={800}>
      <Typography variant="h1">Hi, I'm Will...</Typography>
    </Slide>

    <Slide in={true} direction="left" timeout={1200}>
      <h2>Front End Developer.</h2>
    </Slide>

    <Slide in={true} direction="left" timeout={1600}>
      <p>
        Since graduating University, I have dedicated as much time as I could to
        learning programming and the challenges that come with developing
        software and have found that there is a lot of similarities between
        software development and media production. In particular the need to
        design, plan and control developing versions and the presentation of the
        final product. The constant need to improve and solve problems as the
        software is developed is something that really appeals to me.
      </p>
    </Slide>
  </Container>
);
export default Home;
