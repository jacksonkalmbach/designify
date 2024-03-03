import styled from "styled-components";
import SideBar from "./Sidebar";
import { sizes } from "../shared/utils/styles";

const CreatePage = () => {
  return (
    <CreatePageContainer>
      <SideBar />
    </CreatePageContainer>
  );
};

const CreatePageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - ${sizes.navbarHeight}px);
  position: relative;
  top: 0;
`;

export default CreatePage;
