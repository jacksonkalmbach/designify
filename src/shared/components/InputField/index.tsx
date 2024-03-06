import styled from "styled-components";
import { color } from "../../utils/styles";
import { bodyTextBold, bodyTextRegular } from "../../utils/fonts";

interface InputFieldProps {
  placeholder: string;
  type: string;
  label: string;
  value?: string;
}

const InputField = ({ placeholder, type, label, value }: InputFieldProps) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputField type={type} placeholder={placeholder} value={value} />
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: 12px;
`;

const StyledInputField = styled.input`
  padding: 10px;
  border: 1px solid ${color.borderColor};
  width: 100%;
  box-sizing: border-box;
  ${bodyTextRegular}
`;

const StyledLabel = styled.label`
  ${bodyTextBold}
  padding: 0;
  margin-bottom: 0;
`;

export default InputField;
