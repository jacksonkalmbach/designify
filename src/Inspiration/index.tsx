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

import useFetchData from "../hooks/useFetchData";
import { PostType } from "../types/postTypes";

const InspirationPage = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetchData<PostType[]>("http://localhost:3001/posts");

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
            : posts &&
              posts.map((post: any) => (
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
