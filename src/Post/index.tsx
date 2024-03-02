import { useNavigate } from "react-router-dom";
import {
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
  const [postLinks, setPostLinks] = useState([]);

  useEffect(() => {
    try {
      const fetchPostLinks = async () => {
        const response = await fetch(`http://localhost:3001/posts/${id}/links`);
        if (response.ok) {
          const links = await response.json();
          setPostLinks(links);
        }
      };
      fetchPostLinks();
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  }, [id]);

  return (
    <PostPageContainer>
      <Button
        icon="arrowLeft"
        text="Back"
        variant="ghost"
        onClick={() => navigate("/inspiration")}
      />
      <ImageAndItemsContainer>
        <PostImageContainer>
          <img
            src={sohoLoftImage}
            alt="Post"
            style={{ height: "100%", width: "100%" }}
          />
        </PostImageContainer>
        <UserCard name="jacksonkalmbach" username="jacksonkalmbach" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
          }}
        >
          <h3>SHOP THE LOOK</h3>
          <ItemLinksContainer>
            {postLinks.map((link: { id: number }) => (
              <ItemLink key={link.id} {...link} />
            ))}
          </ItemLinksContainer>
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
        <PostPreview id={3} />
        <PostPreview id={3} />
        <PostPreview id={3} />
        <PostPreview id={3} />
      </MorePostsContainer>
    </PostPageContainer>
  );
};

export default PostPage;
