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
        <PostCreator>
          <PostCreatorImage src="https://media.licdn.com/dms/image/D4E03AQFseatAMo8cnA/profile-displayphoto-shrink_800_800/0/1679333450208?e=1714608000&v=beta&t=s9Iv2U39h4fMAhGg3XisMhrh1c-Ioih8hu57_r3QMdc" />
          <PostCreatorName>jacksonkalmbach</PostCreatorName>
        </PostCreator>

        <Likes count={10} />
      </PostCreatorAndLikes>
    </StyledPostContainer>
  );
};

export default PostPreview;
