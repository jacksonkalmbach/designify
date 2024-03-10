import styled from "styled-components";

import { motion } from "framer-motion";
import { bodyTextRegular, headerBoldMedium } from "../../../shared/utils/fonts";

interface AboutProps {
  alignText: string;
}

export const AboutTextContainer = styled(motion.div)<AboutProps>`
  display: flex;
  position: absolute;
  left: ${(props) => (props.alignText === "left" ? "12%" : "auto")};
  right: ${(props) => (props.alignText === "right" ? "12%" : "auto")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 400px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  top: 50px;
  z-index: 1;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
  }
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    height: 700px;
  }
`;

export const AboutText = styled.p`
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
  ${bodyTextRegular}

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AboutImageContainer = styled(motion.div)<AboutProps>`
  position: absolute;
  left: ${(props) => (props.alignText === "left" ? "auto" : "12%")};
  right: ${(props) => (props.alignText === "right" ? "auto" : "12%")};
  width: 700px;
  height: 500px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

export const AboutTitle = styled.h1`
  margin-bottom: 20px;
  ${headerBoldMedium}

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5px;
  }
`;
