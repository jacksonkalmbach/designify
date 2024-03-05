import styled from "styled-components";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";

const GeneralProfileInformation = () => {
  return (
    <>
      <InputField placeholder="Username" type="text" />
      <InputField placeholder="Email" type="text" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ width: "150px" }}>
          <Button text="Save Changes" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default GeneralProfileInformation;
