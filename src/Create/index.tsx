import styled from "styled-components";
import React, { ReactElement, useState } from "react";
import { StepContainer, ButtonContainer } from "./Styles";

import { sizes } from "../shared/utils/styles";
import Button from "../shared/components/Button";
import { RoomTypeAndStyle } from "./Steps/RoomTypeAndStyle";

const STEPS: { element: ReactElement; title: string }[] = [
  {
    title: "Select a Room Type and Style",
    element: <RoomTypeAndStyle />,
  },
  {
    title: "Describe Your Room",
    element: <div>Step 2</div>,
  },
  {
    title: "Finishing Touches",
    element: <div>Step 3</div>,
  },
];

const CreatePage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (Object.keys(STEPS).length === step) {
      return;
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <CreatePageContainer>
      <StepContainer>
        <h1>{STEPS[step - 1].title}</h1>
        {STEPS[step - 1].element}
        <ButtonContainer>
          <div>
            <Button
              text="Back"
              onClick={() => handleBack()}
              isVisible={step !== 1}
            />
          </div>
          <div>
            <Button
              text="Next"
              onClick={() => handleNext()}
              isVisible={Object.keys(STEPS).length !== step}
            />
          </div>
        </ButtonContainer>
      </StepContainer>
    </CreatePageContainer>
  );
};

const CreatePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - ${sizes.navbarHeight}px);
  position: relative;
  top: 0;
`;

export default CreatePage;
