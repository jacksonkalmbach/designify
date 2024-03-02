import React, { useState } from "react";
import { SideBarContainer } from "./Styles";
import SideBarCategory from "./SidebarCategory";
import { designSelections } from "../designSelections";

const defaultSelections: Record<string, string> = {
  roomType: "",
  theme: "",
};

const SideBar = () => {
  const [selections, setSelections] = useState(defaultSelections);

  const handleSelection = (category: string, value: string) => {
    setSelections({ ...selections, [category]: value });
  };
  return (
    <SideBarContainer>
      {Object.entries(designSelections).map(([key, value], index) => {
        return (
          <SideBarCategory
            key={index}
            title={value.title}
            onSelect={handleSelection}
            options={value.options}
            selectedOption={selections[value.title]}
          />
        );
      })}
    </SideBarContainer>
  );
};

export default SideBar;
