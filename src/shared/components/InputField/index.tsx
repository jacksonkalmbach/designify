import styled from "styled-components";
import { useState } from "react";
import { color } from "../../utils/styles";
import { bodyTextBold, bodyTextRegular } from "../../utils/fonts";

interface InputFieldProps {
  placeholder: string;
  type: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  placeholder,
  type,
  label,
  value,
  onChange,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputField
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
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
