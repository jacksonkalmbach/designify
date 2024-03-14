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
  const [showMore, setShowMore] = React.useState(false);
  const displayedRoomTypes = showMore ? ROOM_TYPES : ROOM_TYPES.slice(0, 6);
  return (
    <Container>
      <RoomOptionsContainer>
        {displayedRoomTypes.map((roomType) => {
          return <RoomOption room={roomType} key={roomType} />;
        })}
      </RoomOptionsContainer>
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? "View Less" : "View More"}
      </div>
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

  @media (max-width: 480px) {
    height: 100px;
  }
`;
