import { useNavigate } from "react-router-dom";
import {
  PostCreator,
  PostCreatorAndLikes,
  PostCreatorImage,
  PostCreatorName,
  StyledImageContainer,
  StyledPostContainer,
} from "./Styles";
import { IoMdHeartEmpty } from "react-icons/io";
import Likes from "./Likes";

interface Props {
  id: number;
  imageUrl: string;
  creator: string;
  creatorPhotoUrl: string;
}

const PostPreview = ({ id, imageUrl, creator, creatorPhotoUrl }: Props) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    console.log("id", id);
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
        <PostCreator onClick={() => navigate(`/${creator}`)}>
          <PostCreatorImage src={creatorPhotoUrl} />
          <PostCreatorName>{creator}</PostCreatorName>
        </PostCreator>
        <Likes count={10} />
      </PostCreatorAndLikes>
    </StyledPostContainer>
  );
};

export default PostPreview;
