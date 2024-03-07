import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";
import { CgChevronDown } from "react-icons/cg";

interface Props {
  name: string;
  imageUrl?: string;
  username: string;
  variant: "small" | "large";
  size: "small" | "large";
  handleClick: () => void;
  isMenu?: boolean;
}

const UserCard = ({
  name,
  imageUrl,
  username,
  variant,
  size,
  isMenu,
  handleClick,
}: Props) => {
  const navigate = useNavigate();

  return (
    <StyledUserCard onClick={handleClick}>
      <ImageContainer size={size} onClick={() => navigate(`/${username}`)}>
        <StyledImage
          src={
            imageUrl || "https://avatars.githubusercontent.com/u/63568460?v=4"
          }
          alt={name}
        />
      </ImageContainer>
      {variant === "large" && <span>{name}</span>}
      {isMenu && <CgChevronDown size={20} />}
    </StyledUserCard>
  );
};

const StyledUserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: fit-content;
  box-sizing: border-box;
  gap: 6px;
  padding: 8px;
  ${bodyTextRegular}
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
interface ImageContainerProps {
  size: "small" | "large";
}

const ImageContainer = styled.div<ImageContainerProps>`
  height: ${(props) => (props.size === "large" ? "40px" : "32px")};
  width: ${(props) => (props.size === "large" ? "40px" : "32px")};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`;

export default UserCard;
