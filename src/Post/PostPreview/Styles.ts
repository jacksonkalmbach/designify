import styled from "styled-components";
import { bodyTextSmall } from "../../shared/utils/fonts";

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
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

export const PostCreator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostCreatorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const PostCreatorName = styled.p`
  font-weight: 700;
  ${bodyTextSmall}
`;
