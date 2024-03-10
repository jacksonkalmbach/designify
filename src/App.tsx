import { Routes, Route } from "react-router-dom";

import Navbar from "./shared/components/NavBar/Navbar";
import Auth from "./Auth/Auth";
import HomePage from "./Home";
import InspirationPage from "./Inspiration";
import CreatePage from "./Create";
import PostPage from "./Post";
import ProfilePage from "./Profile";
import PricingPage from "./Pricing";
import EditProfile from "./Profile/EditProfile";
import GeneralSettings from "./Profile/EditProfile/routes/GeneralSettings";
import AccountSettings from "./Profile/EditProfile/routes/AccountSettings";
import NofitificationSettings from "./Profile/EditProfile/routes/NotificationSettings";

import { Theme } from "@radix-ui/themes";
import { StyledPageContainer } from "./shared/containers/PageContainer/Styles";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Navbar />
          <StyledPageContainer>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/auth"} element={<Auth />} />
              <Route path={"/pricing"} element={<PricingPage />} />
              <Route path={"/create"} element={<CreatePage />} />
              <Route path={"/inspiration"} element={<InspirationPage />} />
              <Route path={"/post/:id"} element={<PostPage />} />
              <Route path={"/:username"} element={<ProfilePage />} />
              <Route path={"/:username/edit"} element={<EditProfile />}>
                <Route index element={<GeneralSettings />} />
                <Route path={"account"} element={<AccountSettings />} />
                <Route path={"social"} element={<>Social</>} />
                <Route
                  path={"notifications"}
                  element={<NofitificationSettings />}
                />
                <Route path={"billing"} element={<>Billing</>} />
              </Route>
            </Routes>
          </StyledPageContainer>
        </Theme>
      </Provider>
    </>
  );
}

export default App;
