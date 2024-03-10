import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { bodyTextRegular } from "../../../shared/utils/fonts";
import { color } from "../../../shared/utils/styles";
import Separator from "../../../shared/components/Separator";

interface EditCategoryProps {
  category: string;
  path: string;
}

const EditCategory = ({ category, path }: EditCategoryProps) => {
  const navigate = useNavigate();
  const activeCategory =
    window.location.pathname.split("/")[3] === undefined
      ? ""
      : window.location.pathname.split("/")[3];

  return (
    <EditCategoryText
      onClick={() => navigate(path)}
      active={activeCategory === path}
    >
      {category}
    </EditCategoryText>
  );
};

const EditCategoriesMenu = () => {
  const categories = [
    {
      title: "General",
      path: "",
    },
    {
      title: "Account",
      path: "account",
    },
    {
      title: "Social",
      path: "social",
    },
    {
      title: "Notifications",
      path: "notifications",
    },
    {
      title: "Billing",
      path: "billing",
    },
  ];

  return (
    <EditProfileCategoriesContainer>
      {categories.map((category: { title: string; path: string }) => (
        <EditCategory
          key={category.title}
          category={category.title}
          path={category.path}
        />
      ))}
      <Separator />
      <EditCategoryText active={false} style={{ color: "red" }}>
        Delete Account
      </EditCategoryText>
    </EditProfileCategoriesContainer>
  );
};

const EditCategoryText = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? "black" : "gray")};
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  background-color: ${(props) =>
    props.active ? color.backgroundLight : "white"};
  padding: 10px 20px;
  ${bodyTextRegular}
  cursor: pointer;
`;

const EditProfileCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 12px;
  min-width: 200px;

  @media (max-width: 758px) {
    width: 100vw;
    justify-content: start;
    box-sizing: border-box;
    padding: 0 24px;
    flex-direction: row;
    overflow: scroll;
  }
`;

export default EditCategoriesMenu;
