import {
  FiltersAndSortsContainer,
  StyledInspirationPageContainer,
} from "./Styles";
import SkeletonPostPreview from "../Post/PostPreview/SkeletonPostPreview";
import { SquareLoader } from "react-spinners";
import PostPreview from "../Post/PostPreview";
import sohoImage from "../shared/assets/soho-loft.jpeg";
import DiscoverCategories from "./components/DiscoverCategories";

import styled from "styled-components";
import { DropdownMenu } from "@radix-ui/themes";
import Dropdown from "../shared/components/Dropdown";
import { useEffect, useState } from "react";

const InspirationPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        setPosts(data);
        console.log("data", data);
        setLoading(false);
      };
      fetchPosts();
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }, []);

  const skeletons = [];
  for (let i = 1; i <= 8; i++) {
    skeletons.push(<SkeletonPostPreview />);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <>
        {/* <FiltersAndSortsContainer>
          <Dropdown
            options={["Popular", "New", "Following"]}
            defaultOption="Popular"
          />
          <DiscoverCategories />
        </FiltersAndSortsContainer> */}
        <StyledInspirationPageContainer>
          {loading
            ? skeletons
            : posts.map((post: any) => (
                <PostPreview
                  key={post.post_id}
                  id={post.post_id}
                  imageUrl={post.image_url}
                  creator={post.username}
                  creatorPhotoUrl={post.photo_url}
                />
              ))}
        </StyledInspirationPageContainer>
      </>
    </div>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export default InspirationPage;
