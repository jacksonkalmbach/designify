import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";

interface Props {
  name: string;
  imageUrl?: string;
  username: string;
  variant: "small" | "large";
  size: "small" | "large";
  handleClick: () => void;
}

const UserCard = ({
  name,
  imageUrl,
  username,
  variant,
  size,
  handleClick,
}: Props) => {
  const navigate = useNavigate();

  return (
    <StyledUserCard onClick={handleClick}>
      <ImageContainer size={size}>
        <StyledImage
          src={
            imageUrl || "https://avatars.githubusercontent.com/u/63568460?v=4"
          }
          alt={name}
        />
      </ImageContainer>
      {variant === "large" && <span>{name}</span>}
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
  height: auto; // Added to maintain aspect ratio
  object-fit: cover;
`;
interface ImageContainerProps {
  size: "small" | "large";
}

const ImageContainer = styled.div<ImageContainerProps>`
  height: ${(props) => (props.size === "large" ? "44px" : "32px")};
  width: ${(props) => (props.size === "large" ? "44px" : "32px")};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  @media (min-width: 768px) {
    height: 26px;
    width: 26px;
  }
`;

export default UserCard;
