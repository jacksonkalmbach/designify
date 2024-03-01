import { useNavigate } from "react-router-dom";
import { StyledLogoContainer } from "./Styles";
import { headerBold } from "../../utils/fonts";
import styled from "styled-components";

interface Props {
  variant: string;
}

const Logo = ({ variant }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledLogoContainer onClick={() => navigate("/")}>
      <StyledLogoText>Designify</StyledLogoText>
    </StyledLogoContainer>
  );
};

const StyledLogoText = styled.h1`
  font-size: 2rem;
  ${headerBold}
`;

export default Logo;
