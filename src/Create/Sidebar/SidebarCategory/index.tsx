import React, { useState } from "react";
import styled from "styled-components";
import { CgChevronDown } from "react-icons/cg";
import { color } from "../../../shared/utils/styles";
import { bodyTextRegular } from "../../../shared/utils/fonts";

const defaultSelections = {
  roomType: "",
  theme: "",
};

interface SideBarCategoryProps {
  title: string;
  options: string[];
  onSelect: (category: string, value: string) => void;
  selectedOption: string;
}

const SideBarCategory = ({
  onSelect,
  title,
  options,
  selectedOption,
}: SideBarCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelection = (category: string, value: string) => {
    if (selectedCategory === value) {
      onSelect(category, "");
      setSelectedCategory("");
      return;
    } else {
      onSelect(category, value);
      setSelectedCategory(value);
    }
  };

  return (
    <div>
      <CategoryTitle onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        {!isOpen ? (
          <CgChevronDown size={24} />
        ) : (
          <CgChevronDown size={24} style={{ rotate: "180deg" }} />
        )}
      </CategoryTitle>
      {isOpen && (
        <CategoryContainer>
          {options.map((option, index) => (
            <Category
              key={index}
              isSelected={selectedCategory === option}
              onClick={() => handleSelection(title, option)}
            >
              {option}
            </Category>
          ))}
        </CategoryContainer>
      )}
    </div>
  );
};

const Category = styled.p<{ isSelected: boolean }>`
  ${bodyTextRegular}
  padding: 10px;
  border: 1px solid ${color.borderColor};
  cursor: pointer;
  width: fit-content;
  margin: 0;
  background-color: ${({ isSelected }) =>
    isSelected ? color.backgroundDark : "white"};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? color.backgroundDark : color.borderColor};
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${color.backgroundLight};
  border-bottom: 1px solid ${color.borderColor};
  ${bodyTextRegular}
  cursor: pointer;
  &:hover {
    background-color: ${color.borderColor};
  }
`;

export default SideBarCategory;
