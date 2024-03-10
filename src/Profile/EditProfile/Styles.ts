import styled from "styled-components";
import { headerBoldSmall } from "../../shared/utils/fonts";

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  width: 100%;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;

  @media (max-width: 758px) {
    flex-direction: column;
  }
`;

export const EditProfileTitle = styled.h1`
  ${headerBoldSmall}
  padding: 0;
  margin: 0;
  text-align: start;
  width: 70%;
  margin-bottom: 40px;
`;

export const EditRouteWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
