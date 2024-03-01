import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";

interface ButtonProps {
  variant?: "primary" | "outlined" | "ghost";
}

export const ButtonContainer = styled.button<ButtonProps>`
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
  transition: all 0.1s ease-in-out;
  ${bodyTextRegular}
  ${(props: ButtonProps) => {
    if (props.variant === "outlined") {
      return `
        background-color: white;
        color: #2a2a2a;
        border: 1px solid #2a2a2a;
      `;
    }
    if (props.variant === "ghost") {
      return `
        background-color: transparent;
        color: #2a2a2a;
      `;
    }
  }}

  &:hover {
    background-color: #f6f6f6;
    color: #2a2a2a;
  }
`;
