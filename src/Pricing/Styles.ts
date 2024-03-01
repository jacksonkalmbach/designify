import styled from "styled-components";
import { headerBoldLarge } from "../shared/utils/fonts";

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const PricingTitle = styled.h1`
  ${headerBoldLarge}
`;
