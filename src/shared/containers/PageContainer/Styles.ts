import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const StyledPageContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: calc(100vh - ${sizes.navbarHeight}px);
  margin-top: 70px;
  box-sizing: border-box;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
