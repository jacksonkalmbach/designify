import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
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
        </Routes>
      </StyledPageContainer>
    </>
  );
}

export default App;
