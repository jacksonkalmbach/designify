import { DropdownMenu, Button } from "@radix-ui/themes";
import { CgChevronDown } from "react-icons/cg";
import styled from "styled-components";
import { bodyTextRegular } from "../../utils/fonts";
import { color } from "../../utils/styles";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  defaultOption: string;
}

const Dropdown = ({ options, defaultOption }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger style={{ cursor: "pointer" }}>
        <Button
          variant="soft"
          color="gray"
          style={{
            padding: "22px",
            backgroundColor: `${color.backgroundLight}`,
            borderRadius: "0",
          }}
        >
          <TextContainer>{selectedOption}</TextContainer>
          <CgChevronDown size={16} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content style={{ borderRadius: "0" }}>
        {options.map((option, index) => (
          <DropdownMenu.Item
            key={index}
            onClick={() => setSelectedOption(option)}
            color="gray"
            style={{
              borderRadius: "0",
              backgroundColor: "transparent",
              color: "black",
              cursor: "pointer",
            }}
          >
            <TextContainer>{option}</TextContainer>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const TextContainer = styled.p`
  ${bodyTextRegular}
  padding: 0;
  margin: 0;
`;

export default Dropdown;
