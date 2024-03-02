import styled from "styled-components";
import { color } from "../../utils/styles";
import { bodyTextRegular } from "../../utils/fonts";

interface InputFieldProps {
  placeholder: string;
  type: string;
}

const InputField = ({ placeholder, type }: InputFieldProps) => {
  return <StyledInputField type={type} placeholder={placeholder} />;
};

const StyledInputField = styled.input`
  padding: 10px;
  border: 1px solid ${color.borderColor};
  width: 100%;
  box-sizing: border-box;
  ${bodyTextRegular}
`;

export default InputField;
