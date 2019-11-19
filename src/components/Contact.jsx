import React, { useState } from "react";
import { Slide, Typography as EM } from "@material-ui/core";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  padding: 30px
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
  text-align: center;
  margin-right: 1em;
  margin-top: 1em;
  margin-left: 1em;
  ${css`
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;

const ContactForm = styled.form`
  width: 14em;
  height: 20em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1a1a1a;
`;

const ContactInput = styled.input`
  height: 10%;
  border: none;
  border-bottom: 2px solid;
  background: transparent;
  color: white;
  font-family: arial;
`;

const Message = styled.textarea`
  height: 40%;
  border: 2px solid;
  border-radius: 10px;
  color: white;
  background: transparent;
  padding: 10px;
  font-family: arial;
`;

const SendButton = styled.button`
  background: transparent;
  color: #3f51b5;
  border: 3px solid;
  border-radius: 10px;
  align-self: flex-end;
  font-family: arial;
  transition: 0.3s ease;
  &: hover {
    color: #80ccff;
    cursor: pointer;
  }
`;

const Em = styled.h4`
  font-size: 1em;
  color: white;
  transition: 0.5s ease;
  padding: 5px;
  ${css`
    &: hover {
      font-size: 1.5em;
      color: #b3e0ff;
      cursor: default;
    }
  `}
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <Slide in="true" direction="left" timeout={1200}>
        <EM variant="h1" style={{ marginLeft: "1em" }}>
          Get in touch...
        </EM>
      </Slide>
      <Container>
        <ContactFormContainer>
          <Slide in="true" direction="left" timeout={1400}>
            <ContactForm
              name="contact"
              netlify
              netlify-honeypot="bot-field"
              hidden
            >
              <ContactInput placeholder="name" name="name"></ContactInput>

              <ContactInput placeholder="email" name="email"></ContactInput>

              <Message placeholder="message" name="message"></Message>
              <SendButton type="submit">Send</SendButton>
            </ContactForm>
          </Slide>
        </ContactFormContainer>
        <Slide in={true} direction="left" timeout={1600}>
          <div>
            <p style={{ padding: "10px" }}>
              If you want to get in touch to talk about work, projects, or just
              to say hi. You can fill out the form here or email me at:
            </p>
            <Em>willjopling@gmail.com</Em>
          </div>
        </Slide>
      </Container>
    </div>
  );
};

export default Contact;
