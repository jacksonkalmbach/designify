import styled from "styled-components";
import HeroSection from "./Hero";
import Footer from "../shared/components/Footer";
import SampleImages from "./SampleImages";
import About from "./About";

const HomePage = () => {
  return (
    <HomeConatiner>
      <HeroSection />
      <SampleImages />
      <About />
      <Footer />
    </HomeConatiner>
  );
};

const HomeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export default HomePage;
