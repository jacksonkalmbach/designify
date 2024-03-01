import { StyledInspirationPageContainer } from "./Styles";
import PostPreview from "../Post/PostPreview";

import sohoImage from "../shared/assets/soho-loft.jpeg";

const InspirationPage = () => {
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push(<PostPreview id={i} imageUrl={i === 2 ? sohoImage : ""} />);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>Categories</div>

      <StyledInspirationPageContainer>{posts}</StyledInspirationPageContainer>
    </div>
  );
};

export default InspirationPage;
