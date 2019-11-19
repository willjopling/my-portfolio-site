import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  background: blue;
  text-align: left;

  width: 80%;
  font-size: 2em;
  ${css`
    @media (max-width: 800px) {
      text-align: center;
      font-size: 2rem;
      margin: auto;
    }
  `}
`;

const Home = () => (
  <Container>
    <h1>Hi, I'm Will</h1>
    <p>
      Since graduating University, I have dedicated as much time as I could to
      learning programming and the challenges that come with developing software
      and have found that there is a lot of similarities between software
      development and media production. In particular the need to design, plan
      and control developing versions and the presentation of the final product.
      The constant need to improve and solve problems as the software is
      developed is something that really appeals to me.
    </p>
  </Container>
);
export default Home;
