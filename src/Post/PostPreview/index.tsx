import { useNavigate } from "react-router-dom";
import { StyledPostContainer } from "./Styles";

interface Props {
  id: number;
  imageUrl?: string;
}

const PostPreview = ({ id, imageUrl }: Props) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  return (
    <StyledPostContainer key={id} onClick={() => handleClick(id)}>
      <img
        src={imageUrl}
        alt="Post"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </StyledPostContainer>
  );
};

export default PostPreview;
