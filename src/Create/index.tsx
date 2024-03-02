import styled from "styled-components";
import SideBar from "./Sidebar";

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
  height: calc(100vh - 70px);
  border: 1px solid red;
  position: relative;
  top: 0;
`;

export default CreatePage;
