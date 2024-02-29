import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/components/NavBar/Navbar";
import { StyledPageContainer } from "./shared/containers/PageContainer/Styles";
import Auth from "./Auth/Auth";
import HomePage from "./Home";
import InspirationPage from "./Inspiration";
import CreatePage from "./Create";
import PostPage from "./Post";
import ProfilePage from "./Profile";

function App() {
  return (
    <>
      <Navbar />
      <StyledPageContainer>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/auth"} element={<Auth />} />
          <Route path={"/create"} element={<CreatePage />} />
          <Route path={"/inspiration"} element={<InspirationPage />} />
          <Route path={"/post/:id"} element={<PostPage />} />
          <Route path={"/:userId"} element={<ProfilePage />} />
        </Routes>
      </StyledPageContainer>
    </>
  );
}

export default App;
