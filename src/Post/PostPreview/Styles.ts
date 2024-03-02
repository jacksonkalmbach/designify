import styled from "styled-components";

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledImageContainer = styled.div`
  cursor: pointer;
  background-color: #f6f6f6;
  height: 300px;
  &:hover {
    background-color: lightgray;
  }
`;

export const PostCreatorAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
