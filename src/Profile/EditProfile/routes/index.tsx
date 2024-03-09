import { Route } from "react-router-dom";
import AccountInformation from "./AccountSettings";
import GeneralProfileInformation from "./GeneralSettings";
import NofitificationSettings from "./NotificationSettings";
import EditProfile from "../index";

const EditProfileRoutes = () => {
  return (
    <Route path={"/:username/edit"} element={<EditProfile />}>
      <Route index element={<GeneralProfileInformation />} />
      <Route path={"account"} element={<AccountInformation />} />
      <Route path={"social"} element={<>Social</>} />
      <Route path={"notifications"} element={<NofitificationSettings />} />
      <Route path={"billing"} element={<>Billing</>} />
    </Route>
  );
};

export default EditProfileRoutes;
