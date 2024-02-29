import { useParams } from "react-router-dom";
import {
  ImageAndItemsContainer,
  MorePostsContainer,
  PostImageContainer,
  PostPageContainer,
} from "./Styles";
import PostPreview from "./PostPreview";

const PostPage = () => {
  const { id } = useParams();
  return (
    <PostPageContainer>
      <h3>[creator]</h3>
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
        <div>View all</div>
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
