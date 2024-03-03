import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-right: 1px solid ${color.borderColor};
`;
