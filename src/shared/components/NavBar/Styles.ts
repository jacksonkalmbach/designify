import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${sizes.navbarHeight}px;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 24px;
  z-index: 999;
  background-color: white;
  gap: 16px;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledNavLinkContainer = styled.div`
  cursor: pointer;
`;
