import { useNavigate } from "react-router-dom";
import { StyledLogoContainer } from "./Styles";
import { headerBoldMedium } from "../../utils/fonts";
import styled from "styled-components";

import LogoSvg from "./LogoSvg";

interface Props {
  variant: string;
}

const Logo = ({ variant }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledLogoContainer onClick={() => navigate("/")}>
      <SVGContainer>
        <LogoSvg />
      </SVGContainer>
      <StyledLogoText>Designify</StyledLogoText>
    </StyledLogoContainer>
  );
};

const SVGContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const StyledLogoText = styled.h1`
  ${headerBoldMedium}

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default Logo;
