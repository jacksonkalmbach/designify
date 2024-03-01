import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";

export const SearchBarContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  gap: 12px;
  width: 100%;
  border-radius: 999px;
  box-sizing: border-box;
  padding: 12px;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 16px;
  ${bodyTextRegular}
  &:focus {
    outline: none;
  }
`;
