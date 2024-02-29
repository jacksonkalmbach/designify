import { useNavigate } from "react-router-dom";
import { StyledPostContainer } from "./Styles";

interface Props {
  id: number;
}

const PostPreview = ({ id }: Props) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  return (
    <StyledPostContainer
      key={id}
      onClick={() => handleClick(id)}
    ></StyledPostContainer>
  );
};

export default PostPreview;
