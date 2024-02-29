import { useNavigate } from "react-router-dom";
import { StyledLogoContainer } from "./Styles";

interface Props {
  variant: string;
}

const Logo = ({ variant }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledLogoContainer onClick={() => navigate("/")}>
      Logo
    </StyledLogoContainer>
  );
};

export default Logo;
