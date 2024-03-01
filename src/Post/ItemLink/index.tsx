import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemLink = ({ ...link }) => {
  const { id, url, description } = link;
  return (
    <ItemLinkContainer>
      <div>Photo</div>
      <Link to={url}>{description}</Link>
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
