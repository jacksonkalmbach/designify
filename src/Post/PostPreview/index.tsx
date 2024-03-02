import { useNavigate } from "react-router-dom";
import {
  PostCreatorAndLikes,
  StyledImageContainer,
  StyledPostContainer,
} from "./Styles";
import { IoMdHeartEmpty } from "react-icons/io";
import Likes from "./Likes";

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
    <StyledPostContainer key={id}>
      <StyledImageContainer onClick={() => handleClick(id)}>
        <img
          src={imageUrl}
          alt="Post"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </StyledImageContainer>
      <PostCreatorAndLikes>
        <div>jacksonkalmbach</div>
        <Likes count={10} />
      </PostCreatorAndLikes>
    </StyledPostContainer>
  );
};

export default PostPreview;
