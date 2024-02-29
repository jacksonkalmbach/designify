import { useNavigate } from "react-router-dom";
import {
  ImageAndItemsContainer,
  ItemLinksContainer,
  MorePostsContainer,
  PostImageContainer,
  PostPageContainer,
} from "./Styles";

import PostPreview from "./PostPreview";
import Button from "../shared/components/Button";
import UserCard from "../shared/components/UserCard";
import ItemLink from "./ItemLink";

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <PostPageContainer>
      <Button
        icon="arrowLeft"
        title="Back"
        onClick={() => navigate("/inspiration")}
      />
      <ImageAndItemsContainer>
        <PostImageContainer />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
          }}
        >
          <h3>SHOP THE LOOK</h3>
          <ItemLinksContainer>
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
            <ItemLink />
          </ItemLinksContainer>
        </div>
      </ImageAndItemsContainer>
      <UserCard name="jacksonkalmbach" username="jacksonkalmbach" />
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
