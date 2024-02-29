import styled from "styled-components";

export const StyledInspirationPageContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 12px;
  grid-template-columns: repeat(1, 1fr);
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets and up */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for desktops and up */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 columns for large desktops and up */
  }
`;
