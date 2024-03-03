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

const InspirationPage = () => {
  const posts: any = [];
  // for (let i = 1; i <= 20; i++) {
  //   posts.push(<PostPreview id={i} imageUrl={i === 2 ? sohoImage : ""} />);
  // }

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
        <FiltersAndSortsContainer>
          <Dropdown
            options={["New", "Popular", "Following"]}
            defaultOption="Popular"
          />
          <DiscoverCategories />
        </FiltersAndSortsContainer>
        <StyledInspirationPageContainer>
          {posts.length > 0 ? posts : skeletons}
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
