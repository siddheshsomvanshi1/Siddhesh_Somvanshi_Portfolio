"use client";
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import MagicButton from "./MagicButton";
import { LinkPreview } from "./ui/LinkPreview";
import { Button } from "./ui/MovingBorders";
import Image from "next/image"; // Import Image component for optimization

// Define keyframes for the glow animation
const glowAnimation = keyframes`
  from {
    text-shadow: 0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f, 0 0 25px #00f;
  }
  to {
    text-shadow: 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f, 0 0 25px #00f, 0 0 30px #00f;
  }
`;

// Styled components
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
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  word-break: break-all;
  transition: color 0.3s ease; /* Smooth transition for the color change */

  &:hover {
    color: cyan; /* Cyan color on hover */
    animation: ${glowAnimation} 1s ease-in-out infinite alternate; /* Apply glow animation */
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []); // Add any relevant dependencies here if needed

  return (
    <Container>
      <Subtitle>Let’s Build Something Great Together: Hire Me!</Subtitle>
      <Email>siddheshsomvanshi1@gmail.com</Email>
      <Links>
        <LinkPreview
          url="https://www.linkedin.com/in/siddheshsomvanshi/"
          className="my-link-class"
        >
          {isClient && (
            <a
              href="https://www.linkedin.com/in/siddheshsomvanshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button position="right">LinkedIn</Button>
            </a>
          )}
        </LinkPreview>
        <Separator>•</Separator>
        <LinkPreview
          url="https://drive.google.com/file/d/1LYlc47HaBLQdBAhJRgjTa3Pf8zgnkkzJ/view?usp=sharing"
          className="my-link-class"
          isStatic={false}
        >
          {isClient && (
            <a
              href="https://drive.google.com/file/d/1LYlc47HaBLQdBAhJRgjTa3Pf8zgnkkzJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button position="right">Download CV</Button>
            </a>
          )}
        </LinkPreview>
      </Links>
    </Container>
  );
};

export default About;
