import styled from "styled-components";
import { bodyTextRegular, headerBoldMedium } from "../shared/utils/fonts";

export const StyledAuthPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const StyledAuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 400px;
  box-sizing: border-box;
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
`;

export const ORDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  ${bodyTextRegular}
`;

export const AuthBodyText = styled.p`
  ${bodyTextRegular}
`;
