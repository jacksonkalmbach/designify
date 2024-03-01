import { SearchBarContainer, SearchBarInput } from "./Styles";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <MdOutlineSearch
        style={{ height: "24px", width: "24px", color: "gray" }}
      />
      <SearchBarInput type="text" placeholder="Find some inspiration" />
    </SearchBarContainer>
  );
};

export default SearchBar;
