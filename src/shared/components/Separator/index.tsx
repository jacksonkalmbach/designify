import styled from "styled-components";
import { color } from "../../utils/styles";

const Separator = () => {
  return <StyledSeparator />;
};

const StyledSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.borderColor};
`;

export default Separator;
