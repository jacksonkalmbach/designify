import {
  EditProfileContainer,
  EditProfileTitle,
  EditWrapper,
  EditRouteWrapper,
} from "./Styles";
import { Outlet } from "react-router-dom";
import EditCategoriesMenu from "./components/EditCategoriesMenu";

const categoriesObj: Record<string, string> = {
  "/": "Profile",
  account: "Account",
  social: "Social",
  notifications: "Notifications",
  billing: "Billing",
};

const EditProfile = () => {
  const windowPath = window.location.pathname;
  const activeCategory = windowPath.split("/")[3];
  return (
    <EditProfileContainer>
      <EditProfileTitle>
        Jackson Kalmbach<span style={{ color: "gray" }}>{" / "}</span>
        {categoriesObj[activeCategory] === undefined
          ? "General"
          : categoriesObj[activeCategory]}
      </EditProfileTitle>
      <EditWrapper>
        <EditCategoriesMenu />
        <EditRouteWrapper>
          <Outlet />
        </EditRouteWrapper>
      </EditWrapper>
    </EditProfileContainer>
  );
};

export default EditProfile;
