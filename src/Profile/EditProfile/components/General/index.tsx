import styled from "styled-components";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import { useOutletContext } from "react-router-dom";
import { UserType } from "../../../../types/userTypes";

interface OutletContextType {
  user: UserType;
}

const GeneralProfileInformation = () => {
  const { user } = useOutletContext<OutletContextType>();

  return (
    <>
      {user && (
        <>
          <InputField placeholder={user.email} type="text" label="Username" />
          <InputField placeholder="Email" type="text" label="Email Address" />
        </>
      )}
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
