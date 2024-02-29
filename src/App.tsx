import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/components/NavBar/Navbar";
import { StyledPageContainer } from "./shared/containers/PageContainer/Styles";
import Auth from "./Auth/Auth";
import HomePage from "./Home";
import InspirationPage from "./Inspiration";
import CreatePage from "./Create";

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
        </Routes>
      </StyledPageContainer>
    </>
  );
}

export default App;
