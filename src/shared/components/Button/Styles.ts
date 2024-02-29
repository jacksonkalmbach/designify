import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  padding: 12px;
  border: none;
  border-radius: 9999px;
  background-color: transparent;
  &:hover {
    background-color: #f6f6f6;
  }
`;
