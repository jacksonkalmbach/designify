import styled from "styled-components";
import HeroSection from "./Hero";
import sohoImg from "../shared/assets/soho-loft.jpeg";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ImageConatiner>
        <SampleImageContainer>
          <SampleImage
            src={
              "https://media.architecturaldigest.com/photos/645bcb45b5e359cf55d9d108/16:9/w_2240,c_limit/M.Naeve%20Sunset%20Dining%20Nook.jpg"
            }
            alt=""
          />
        </SampleImageContainer>
        <SampleImageContainer>
          <SampleImage
            src={
              "https://media.architecturaldigest.com/photos/65de78abae844eb7145a89ae/master/w_2580%2Cc_limit/OT2233037.jpg"
            }
            alt=""
          />
        </SampleImageContainer>
        <SampleImageContainer>
          <SampleImage
            src={
              "https://media.architecturaldigest.com/photos/65de78a8ac6b39582a1ab9d3/master/w_2580%2Cc_limit/OT2233023.jpg"
            }
            alt=""
          />
        </SampleImageContainer>
        <SampleImageContainer>
          <SampleImage
            src={
              "https://media.architecturaldigest.com/photos/6481fa7547b544bc90783334/16:9/w_2240,c_limit/meredith%20ellis%20design%203.jpeg"
            }
            alt=""
          />
        </SampleImageContainer>
        <SampleImageContainer>
          <SampleImage src={sohoImg} alt="" />
        </SampleImageContainer>
      </ImageConatiner>
    </div>
  );
};

const ImageConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

const SampleImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SampleImageContainer = styled.div`
  background-color: #f4f4f4;
  height: 300px;
  width: 400px;
`;

export default HomePage;
