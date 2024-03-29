import styled from "styled-components";
import { color, sizes } from "../../utils/styles";
import { bodyTextRegular } from "../../utils/fonts";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${sizes.navbarHeight}px;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 40px;
  z-index: 999;
  background-color: white;
  gap: 16px;
  border-bottom: 1px solid ${color.borderColor};

  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledHambugerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyledNavLinkContainer = styled.div`
  cursor: pointer;
  ${bodyTextRegular}
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
