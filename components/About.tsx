"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #0e090d;
  color: #e2bcbc;
  text-align: center;
  border-radius: 50px;
  border: 5px;
  box-shadow: rgba(21, 57, 100, 4.7) 0px 4px 40px; /* Enhanced shadow effect */
  margin-bottom: 70px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Email = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  word-break: break-all;
  transition: color 0.3s ease; /* Smooth transition for the color change */

  &:hover {
    color: yellow; /* Mustard yellow on hover */
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #e2bcbc;
  text-decoration: none;
`;

const Separator = styled.span`
  font-size: 18px;
  color: #e2bcbc;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Subtitle>Looking for a new talent?</Subtitle>
      <Email>siddheshsomvanshi1@gmail.com</Email>
      <Links>
        <Link
          href="https://www.linkedin.com/in/siddheshsomvanshi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Separator>•</Separator>
        <a
          href="https://drive.google.com/file/d/1feyK_JEmuDQXPfQ5B55xwVVkO3nV541K/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </Links>
    </Container>
  );
};

export default About;
