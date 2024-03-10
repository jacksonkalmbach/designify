import styled from "styled-components";
import { bodyTextRegular, headerBoldMedium } from "../shared/utils/fonts";

export const StyledAuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);

  @media (max-width: 768px) {
    
  }
`;

export const StyledAuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 400px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 24px;
  }
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const StyledAuthHeader = styled.h1`
  ${headerBoldMedium}
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ORDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  ${bodyTextRegular}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AuthBodyText = styled.p`
  ${bodyTextRegular}
`;
