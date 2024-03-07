import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ImageAndItemsContainer,
  ItemLinksContainer,
  MorePostsContainer,
  PostImageContainer,
  PostPageContainer,
} from "./Styles";

import sohoLoftImage from "../shared/assets/soho-loft.jpeg";

import PostPreview from "./PostPreview";
import Button from "../shared/components/Button";
import UserCard from "../shared/components/UserCard";
import ItemLink from "./ItemLink";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await fetch(`http://localhost:3001/posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log("postdata", data);
          setPostData(data);
        }
      };
      fetchPost();
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  }, [id]);

  return (
    postData && (
      <PostPageContainer>
        <ButtonContainer>
          <Button
            icon="arrowLeft"
            text="Back"
            variant="ghost"
            onClick={() => navigate("/inspiration")}
          />
        </ButtonContainer>
        <ImageAndItemsContainer>
          <div>
            <PostImageContainer>
              <img
                src={postData.image_url}
                alt="Post"
                style={{ height: "100%", width: "100%" }}
              />
            </PostImageContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                width: "100%",
              }}
            >
              <UserCard
                name={postData.username}
                username={postData.username}
                imageUrl={postData.photo_url}
                variant="large"
                size="large"
                handleClick={() => navigate(`/${postData.username}`)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
            }}
          >
            <h3>SHOP THE LOOK</h3>
            <ItemLinksContainer></ItemLinksContainer>
          </div>
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
          {/* <PostPreview id={3} creator="jacksonkalmbach" /> */}
        </MorePostsContainer>
      </PostPageContainer>
    )
  );
};

export default PostPage;
