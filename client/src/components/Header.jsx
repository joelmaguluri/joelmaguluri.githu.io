import React from "react";
import styled from "styled-components";
import Twitter from "../assets/icons/twitter-brands.svg";
import Github from "../assets/icons/github-brands.svg";
import LinkedIn from "../assets/icons/linkedin-in-brands.svg";
import MenuBar from "../assets/icons/bars-solid.svg";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.parent ? null : "row")};
  position: ${(props) => (props.parent ? "fixed" : null)};
  justify-content: ${(props) => (props.parent ? null : "space-around")};
  align-items: ${(props) => (props.parent ? null : "center")};
  height: ${(props) => (props.parent ? "75px" : null)};
  width: 100%;
  z-index: 3000;
`;

const Icon = styled.img`
  margin: ${(props) => (props.type === "menu" ? "0 300px 0 0" : null)};
  height: 36px;
`;

const IconWrapper = styled.div`
  margin: 0 0 0 300px;
  img {
    margin: 0 0 0 50px;
  }
`;

export default function Header() {
  return (
    <Flex parent>
      <Flex>
        <Icon src={MenuBar} type="menu" alt="Menu" />
        <IconWrapper>
          <Icon src={Twitter} alt="Twitter" />
          <Icon src={Github} alt="Github" />
          <Icon src={LinkedIn} alt="LinkedIn" />
        </IconWrapper>
      </Flex>
    </Flex>
  );
}
