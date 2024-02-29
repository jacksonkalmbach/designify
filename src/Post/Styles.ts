import styled from "styled-components";

export const PostPageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ImageAndItemsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-bottom: 24px;
`;

export const PostImageContainer = styled.div`
  width: 900px;
  height: 600px;
  background-color: #f5f5f5;
`;

export const MorePostsContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;
