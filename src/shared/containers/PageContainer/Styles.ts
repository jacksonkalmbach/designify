import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const StyledPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
