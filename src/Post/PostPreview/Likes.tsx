import { IoMdHeartEmpty } from "react-icons/io";
import styled from "styled-components";

interface LikesProps {
  count: number;
}

const Likes = ({ count }: LikesProps) => {
  return (
    <StyledLikes>
      <IoMdHeartEmpty style={{ cursor: "pointer" }} />
      <span>{count}</span>
    </StyledLikes>
  );
};

const StyledLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

export default Likes;
