import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 90px;
  font-weight: 700;
  margin: 10% 0 0 15%;
`;

const MiniTitle = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap;
  letter-spacing: 0.15em; /* Adjust as needed */
  font-family: "Raleway", sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 50px;
  font-weight: 600;
  margin: 3% 0 0 15%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  z-index: 3000;
  position: absolute;
`;

const SubTitle = () => {
  const [state, setProffession] = useState({
    title: "Software Developer",
    index: 0,
    proffession: ["Software Developer", "Guitarist", "Researcher"],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      let nextindex = state.index + 1;
      if (nextindex > state.proffession.length - 1) {
        setProffession((state) => ({
          ...state,
          index: 0,
          title: state.proffession[0],
        }));
      } else {
        setProffession((state) => ({
          ...state,
          index: nextindex,
          title: state.proffession[nextindex],
        }));
      }
    }, 3000);
    return () => {
      // Return callback to run on unmount.
      clearInterval(timer);
    };
  });

  return <MiniTitle>I'm a {state.title}</MiniTitle>;
};

const Button = styled.a`
  display: inline;
  padding: 12px 50px 12px 50px;
  font-size: 21px;
  font-family: "Raleway", sans-serif;
  vertical-align: middle;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.9);
  cursor: pointer;
  background: transparent;
  transition: all 150ms ease 1ms;
  text-decoration: none;
  :hover {
    background: rgba(255, 255, 255, 0.9);
    color: black;
  }
`;

const DivWrapper = styled.div`
  margin: 8% 0 0 20%;
  display: inline;
  width: 100%;
  span {
    font-size: 25px;
    font-family: "Raleway", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    padding: 0 0 0 2%;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: 300;
    cursor: pointer;
    :hover {
      color: white;
    }
  }
`;

export default function MainContent() {
  return (
    <Flex>
      <MainTitle>Hello, This is Sudeep Joel </MainTitle>
      <SubTitle />
      <DivWrapper>
        <Button href="Resume.pdf" download>
          Download Resume <i className="fa fa-download"></i>
        </Button>
        <span>
          <strong>or</strong> &nbsp; Scroll down to know more about me
        </span>
      </DivWrapper>
    </Flex>
  );
}
