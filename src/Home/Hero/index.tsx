import styled from "styled-components";
import { bodyTextRegular, headerBoldLarge } from "../../shared/utils/fonts";
import sohoImg from "../../shared/assets/soho-loft.jpeg";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import { color } from "../../shared/utils/styles";

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
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            text="Learn More"
            onClick={() => navigate("about")}
            variant="outlined"
          />
          <Button text="Get Started" onClick={() => navigate("auth")} />
        </div>
      </StyledHeaderContainer>
      <StyledImageContainer>
        <StyledHeroImage src={sohoImg} alt="" />
      </StyledImageContainer>
    </StyledHeroContainer>
  );
};

const StyledHeaderContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 100px;
  top: 35%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1;
  background-opacity: 0.5;
`;

const SubTitleText = styled.p`
  color: black;
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
  ${bodyTextRegular}
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  height: calc(80vh);
  box-sizing: border-box;
`;

const StyledHeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledImageContainer = styled.div`
  display: flex;
  width: 70%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 90px;
`;

const StyledHeader = styled.h1`
  color: black;
  text-align: center;
  ${headerBoldLarge}
  margin: 0;
`;

export default HeroSection;
