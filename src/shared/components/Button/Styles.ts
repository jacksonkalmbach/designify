import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";

export const ButtonContainer = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  padding: 12px;
  border: none;
  background-color: #2a2a2a;
  color: white;
  font-size: 16px;
  ${bodyTextRegular}
  &:hover {
    background-color: #f6f6f6;
    color: #2a2a2a;
  }
`;
