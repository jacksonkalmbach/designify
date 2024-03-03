import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const SkeletonPostPreview = () => {
  return (
    <PostPreviewSkeletonContainer>
      <PostPreviewImageSkeleton>
        <Skeleton height={"100%"} />
      </PostPreviewImageSkeleton>
      <PostPreviewTitleSkeleton>
        <Skeleton height={"100%"} />
      </PostPreviewTitleSkeleton>
    </PostPreviewSkeletonContainer>
  );
};

const PostPreviewSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PostPreviewImageSkeleton = styled.div`
  height: 300px;
`;

const PostPreviewTitleSkeleton = styled.div`
  height: 30px;
`;

export default SkeletonPostPreview;
