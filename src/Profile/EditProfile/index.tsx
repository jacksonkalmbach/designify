import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  EditProfileContainer,
  EditProfileTitle,
  EditWrapper,
  EditRouteWrapper,
} from "./Styles";
import { Outlet } from "react-router-dom";
import { getUserFromDatabaseByUid } from "../../utils/user/userDatabaseUtils";
import EditCategoriesMenu from "./components/EditCategoriesMenu";

const categoriesObj: Record<string, string> = {
  "/": "Profile",
  account: "Account",
  social: "Social Accounts",
  notifications: "Notifications",
  billing: "Billing",
};

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const activeCategory = location.pathname.split("/")[3];

  const currentUserString = localStorage.getItem("designify_user");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (currentUser && currentUser.uid) {
          const userData = await getUserFromDatabaseByUid(currentUser.uid);
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user: ", error);
      }
    };
    fetchUser();
  }, []);

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
