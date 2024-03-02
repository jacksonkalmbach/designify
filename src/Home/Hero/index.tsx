import sohoImg from "../../shared/assets/soho-loft.jpeg";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import {
  StyledHeroContainer,
  StyledHeaderContainer,
  StyledHeader,
  SubTitleText,
  StyledButtonContainer,
  StyledImageContainer,
  StyledHeroImage,
} from "./Styles";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <StyledHeroContainer>
      <StyledHeaderContainer>
        <StyledHeader>Find Inspiration. </StyledHeader>
        <StyledHeader>Create Your Space.</StyledHeader>
        <SubTitleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </SubTitleText>
        <StyledButtonContainer>
          <Button text="Get Started" onClick={() => navigate("auth")} />
        </StyledButtonContainer>
      </StyledHeaderContainer>
      <StyledImageContainer>
        <StyledHeroImage src={sohoImg} alt="" />
      </StyledImageContainer>
    </StyledHeroContainer>
  );
};

export default HeroSection;
