import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  name: string;
  imageUrl?: string;
  username: string;
}

const UserCard = ({ name, imageUrl, username }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledUserCard onClick={() => navigate(`/${username}`)}>
      <ImageContainer>
        <StyledImage src="https://avatars.githubusercontent.com/u/63568460?v=4" />
      </ImageContainer>
      {name}
    </StyledUserCard>
  );
};

const StyledUserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  box-sizing: border-box;
  gap: 6px;
  padding: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`;

export default UserCard;
