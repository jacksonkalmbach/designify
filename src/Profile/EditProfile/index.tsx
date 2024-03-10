import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import EditCategoriesMenu from "./routes/EditCategoriesMenu";

import useFetchData from "../../hooks/useFetchData";

import { UserType } from "../../types/userTypes";

import {
  EditProfileContainer,
  EditProfileTitle,
  EditWrapper,
  EditRouteWrapper,
} from "./Styles";

const categoriesObj: Record<string, string> = {
  "/": "Profile",
  account: "Account",
  social: "Social Accounts",
  notifications: "Notifications",
  billing: "Billing",
};

const EditProfile = () => {
  const location = useLocation();
  const activeCategory = location.pathname.split("/")[3];
  const currentUserString = localStorage.getItem("designify_user");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  const {
    data: user,
    loading,
    error,
  } = useFetchData<UserType>(
    process.env.REACT_APP_SERVER_BASE_URL + `/users/uid/${currentUser.uid}`
  );

  return (
    <EditProfileContainer>
      <EditProfileTitle>
        {currentUser.first_name + " " + currentUser.last_name}
        <span style={{ color: "gray" }}>{" / "}</span>
        {categoriesObj[activeCategory] === undefined
          ? "General"
          : categoriesObj[activeCategory]}
      </EditProfileTitle>
      <EditWrapper>
        <EditCategoriesMenu />
        <EditRouteWrapper>
          <Outlet context={{ user }} />
        </EditRouteWrapper>
      </EditWrapper>
    </EditProfileContainer>
  );
};

export default EditProfile;
