import styled from "styled-components";
import AboutSection from "./Section";
import scandiKitchen from "../../shared/assets/scandi-kitchen.jpeg";
import farmhouseKitchen from "../../shared/assets/farmhouse-kitchen.jpeg";
import bauhausLivingRoom from "../../shared/assets/bauhaus-living-room.jpeg";

const sections = [
  {
    title: "Discover Inspiration",
    text: "Dive into a curated collection of interior designs. From modern minimalist to rustic charm, find styles that speak to you.",
    buttonText: "Find Inspiration",
    image: scandiKitchen,
    link: "inspiration",
    alignText: "left",
  },
  {
    title: "Design with Intuition",
    text: "Explore a variety of styles and designs. Find the perfect fit for your home and create a space that is uniquely yours.",
    buttonText: "Create a Design",
    image: farmhouseKitchen,
    link: "create",
    alignText: "right",
  },
  {
    title: "Share and Collaborate",
    text: "Create a design you’re proud of? Share it with the Designify community! Get feedback, suggestions, and collaborate with others to refine your creation.",
    buttonText: "Get Started",
    image: bauhausLivingRoom,
    link: "auth",
    alignText: "left",
  },
];

const About = () => {
  return (
    <AboutContainer>
      {sections.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          text={section.text}
          buttonText={section.buttonText}
          image={section.image}
          link={section.link}
          alignText={section.alignText}
        />
      ))}
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: start;
  padding: 20px;
  margin-top: 48px;
  box-sizing: border-box;
  background-color: white;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 758px) {
    padding: 0;
    gap: 0;
    margin-top: 0;
  }
`;

export default About;
