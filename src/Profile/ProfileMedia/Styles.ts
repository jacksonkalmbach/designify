import styled from "styled-components";
import { bodyTextRegular } from "../../shared/utils/fonts";
import { color } from "../../shared/utils/styles";

interface MediaFilterProps {
  active: boolean;
}

export const ProfileImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MediaFiltersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const MediaFilter = styled.div<MediaFilterProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${bodyTextRegular}
  cursor: pointer;
  padding: 10px;

  background-color: ${(prop) =>
    prop.active ? color.backgroundLight : "white"};
  color: ${(prop) => (prop.active ? "black" : "gray")};
`;

export const MediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MediaItem = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #e0e0e0;
`;
