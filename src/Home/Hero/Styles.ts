import styled from "styled-components";
import {
  bodyTextRegular,
  headerBoldLarge,
  subTitleRegular,
} from "../../shared/utils/fonts";

export const StyledButtonContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export const StyledHeaderContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 100px;
  top: 35%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1;
  background-opacity: 0.5;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    height: 60%;
    box-shadow: none;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    top: 80px;
  }
`;

export const SubTitleText = styled.p`
  color: black;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  ${subTitleRegular}
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(80vh);
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 60vh;x
    flex-direction: column;
  }
`;

export const StyledHeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  width: 70%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 90px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledHeader = styled.h1`
  color: black;
  text-align: center;
  ${headerBoldLarge}
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
