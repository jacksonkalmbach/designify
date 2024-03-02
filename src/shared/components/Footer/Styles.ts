import styled from "styled-components";
import { color } from "../../utils/styles";
import { bodyTextRegular } from "../../utils/fonts";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 24px 0px;
  box-sizing: border-box;
  background-color: ${color.backgroundDark};
  color: white;
  ${bodyTextRegular}
  margin-top: 24px;
`;
