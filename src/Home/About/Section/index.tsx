import Button from "../../../shared/components/Button";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  AboutImage,
  AboutImageContainer,
  AboutText,
  AboutTextContainer,
  AboutTitle,
  TextAndImageContainer,
} from "./Styles";

const containerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

interface AboutSectionProps {
  title: string;
  text: string;
  buttonText: string;
  image: string;
  link: string;
  alignText: string;
}

const AboutSection = ({
  title,
  text,
  buttonText,
  image,
  link,
  alignText,
}: AboutSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <TextAndImageContainer>
      <AboutTextContainer
        ref={ref}
        alignText={alignText}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <AboutTitle>{title}</AboutTitle>
        <AboutText>{text}</AboutText>
        <div>
          <Button
            text={buttonText}
            variant="primary"
            onClick={() => navigate(`/${link}`)}
          />
        </div>
      </AboutTextContainer>
      <AboutImageContainer
        ref={ref}
        alignText={alignText}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <AboutImage src={image} alt="Discover Inspiration" />
      </AboutImageContainer>
    </TextAndImageContainer>
  );
};

export default AboutSection;
