import React from "react";
import styled from "styled-components";

const ROOM_TYPES = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Dining Room",
  "Office",
  "Outdoor",
  "Hallway",
  "Kids Room",
  "Nursery",
  "Gym",
  "Spa",
  "Balcony",
  "Patio",
  "Laundry Room",
  "Garage",
  "Basement",
  "Library",
];

const STYLE_OPTIONS = [
  "Modern",
  "Contemporary",
  "Minimalist",
  "Industrial",
  "Mid-Century Modern",
  "Scandinavian",
  "Traditional",
  "Transitional",
  "Rustic",
  "Bohemian",
  "Shabby Chic",
  "Coastal",
  "Farmhouse",
  "Vintage",
];

const RoomOption = ({ room }: { room: string }) => {
  return <RoomTypeContainer>{room}</RoomTypeContainer>;
};

export const RoomTypeAndStyle = () => {
  return (
    <Container>
      <RoomOptionsContainer>
        {ROOM_TYPES.slice(0, 6).map((roomType) => {
          return <RoomOption room={roomType} key={roomType} />;
        })}
      </RoomOptionsContainer>
      <div>View More</div>
      <StyleOptionsContainer>
        {STYLE_OPTIONS.map((style: string) => {
          return <div>{style}</div>;
        })}
      </StyleOptionsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const RoomOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 10px;
`;

const StyleOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const RoomTypeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    scale: 0.95;
  }
  transition: all 0.2s ease-in;
`;
