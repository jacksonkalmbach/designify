import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "@radix-ui/themes/styles.css";
import Navbar from "./shared/components/NavBar/Navbar";
import { StyledPageContainer } from "./shared/containers/PageContainer/Styles";
import Auth from "./Auth/Auth";
import HomePage from "./Home";
import InspirationPage from "./Inspiration";
import CreatePage from "./Create";
import PostPage from "./Post";
import ProfilePage from "./Profile";
import PricingPage from "./Pricing";
import { useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import EditProfile from "./Profile/EditProfile";
import GeneralProfileInformation from "./Profile/EditProfile/components/General";
import AccountInformation from "./Profile/EditProfile/components/Account";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("designify_user");
    if (user !== null) {
      navigate("/inspiration");
    }
  }, []);

  return (
    <>
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
              <Route index element={<GeneralProfileInformation />} />
              <Route path={"account"} element={<AccountInformation />} />
              <Route path={"social"} element={<>Social</>} />
              <Route path={"notifications"} element={<>Notifications</>} />
              <Route path={"billing"} element={<>Billing</>} />
            </Route>
          </Routes>
        </StyledPageContainer>
      </Theme>
    </>
  );
}

export default App;
