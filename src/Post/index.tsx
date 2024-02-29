import { useNavigate } from "react-router-dom";
import {
  ImageAndItemsContainer,
  MorePostsContainer,
  PostImageContainer,
  PostPageContainer,
} from "./Styles";

import PostPreview from "./PostPreview";
import Button from "../shared/components/Button";
import UserCard from "../shared/components/UserCard";

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <PostPageContainer>
      <Button icon="arrowLeft" onClick={() => navigate("/inspiration")} />
      <UserCard name="jacksonkalmbach" username="jacksonkalmbach" />
      <ImageAndItemsContainer>
        <PostImageContainer />
        <div>list of items</div>
      </ImageAndItemsContainer>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>More from [creator]</div>
        <div onClick={() => navigate("/jacksonkalmbach")}>View all</div>
      </div>
      <MorePostsContainer>
        <PostPreview id={3} />
        <PostPreview id={3} />
        <PostPreview id={3} />
        <PostPreview id={3} />
      </MorePostsContainer>
    </PostPageContainer>
  );
};

export default PostPage;
