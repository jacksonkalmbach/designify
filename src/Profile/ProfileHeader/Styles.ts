import styled from "styled-components";
import { bodyTextRegular, headerBoldMedium } from "../../shared/utils/fonts";

export const ProfileHeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  width: 70%;
  justify-content: center;
`;

export const ProfileHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileNameAndImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ProfileHeaderImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileHeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileHeaderName = styled.h1`
  ${headerBoldMedium}
  padding: 0;
  margin: 0;
`;

export const ProfileHeaderText = styled.p`
  margin: 0;
  padding: 0;
  ${bodyTextRegular}
`;
