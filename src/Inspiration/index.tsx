import { StyledInspirationPageContainer } from "./Styles";
import PostPreview from "../Post/PostPreview";

const InspirationPage = () => {
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push(<PostPreview id={i} />);
  }
  return (
    <StyledInspirationPageContainer>{posts}</StyledInspirationPageContainer>
  );
};

export default InspirationPage;
