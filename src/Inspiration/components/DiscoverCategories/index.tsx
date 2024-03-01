import styled from "styled-components";
import { useState } from "react";
import { bodyTextRegular } from "../../../shared/utils/fonts";
import { color } from "../../../shared/utils/styles";

interface CategoryProps {
  text: string;
  selectedCategory: string;
  onClick: () => void;
}

const categoryies = [
  "Discover",
  "Interior",
  "Exterior",
  "Furniture",
  "Architecture",
];

const Category = ({ text, selectedCategory, onClick }: CategoryProps) => {
  return (
    <StyledCategory isSelected={selectedCategory === text} onClick={onClick}>
      {text}
    </StyledCategory>
  );
};

const DiscoverCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Discover");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <StyledCategories>
      {categoryies.map((category) => (
        <Category
          text={category}
          selectedCategory={selectedCategory}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </StyledCategories>
  );
};

const StyledCategory = styled.div<{ isSelected: boolean }>`
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? color.backgroundLight : ""};
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
  ${bodyTextRegular}
  padding: 10px 20px;
  &:hover {
    color: black;
  }
`;

const StyledCategories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  flex-direction: row;
  margin: 0 20px;
  padding: 20px 0;
  box-sizing: border-box;
`;

export default DiscoverCategories;
