import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SampleImageContainer = styled.div`
  display: inline-block;
  height: 300px;
  width: 400px;
`;

export const SampleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
