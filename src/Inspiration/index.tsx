import { StyledInspirationPageContainer } from "./Styles";
import PostPreview from "../Post/PostPreview";

import sohoImage from "../shared/assets/soho-loft.jpeg";

const InspirationPage = () => {
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push(<PostPreview id={i} imageUrl={i === 2 ? sohoImage : ""} />);
  }
  return (
    <StyledInspirationPageContainer>{posts}</StyledInspirationPageContainer>
  );
};

export default InspirationPage;
