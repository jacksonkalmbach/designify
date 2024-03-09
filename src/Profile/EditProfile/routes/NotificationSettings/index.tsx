import React from "react";
import NotificationCategory from "./NotificationCategory";
import styled from "styled-components";
import Button from "../../../../shared/components/Button";

const NofitificationSettings = () => {
  return (
    <Container>
      <NotificationCategory title="Alerts and Notifications" />
      <NotificationCategory title="Account Activity" />
      <NotificationCategory title="Newsletters" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ width: "fit-content" }}>
          <Button text={"Update Notifications"} onClick={() => {}} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: start;
  padding: 0;
  box-sizing: border-box;
  margin-top: 0;
`;

export default NofitificationSettings;
