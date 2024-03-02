import { IoMdHeartEmpty } from "react-icons/io";
import styled from "styled-components";
import { bodyTextSmall } from "../../shared/utils/fonts";

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
  ${bodyTextSmall}
`;

export default Likes;
