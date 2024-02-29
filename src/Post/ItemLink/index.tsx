import styled from "styled-components";

const ItemLink = () => {
  return (
    <ItemLinkContainer>
      <div>Photo</div>
      <div>Title</div>
    </ItemLinkContainer>
  );
};

const ItemLinkContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  box-sizing: border-box;
  padding: 12px;
  justify-content: start;
  align-items: center;
  min-height: 100px;
  gap: 12px;
`;

export default ItemLink;
