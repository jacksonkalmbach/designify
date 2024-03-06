import React, { useEffect, useState } from "react"; // Ensure useState is imported
import styled from "styled-components";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import { useOutletContext } from "react-router-dom";
import { UserType } from "../../../../types/userTypes";
import { updateUsernameEmailInDatabase } from "../../../../utils/user/userDatabaseUtils";

interface OutletContextType {
  user: UserType;
}

const GeneralProfileInformation = () => {
  const { user } = useOutletContext<OutletContextType>();
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const updateUserUsernameEmail = () => {
    const update = async () => {
      const isUpdate = await updateUsernameEmailInDatabase(
        user.uid,
        username,
        email
      );
      if (isUpdate) {
        localStorage.setItem(
          "designify_user",
          JSON.stringify({ ...user, username, email })
        );
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000);
        setIsUpdated(true);
      }
    };
    update();
  };

  return (
    <>
      {username !== "" && (
        <>
          <InputField
            placeholder="Username"
            type="text"
            label="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <InputField
            placeholder="Email Address"
            type="text"
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
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
          <Button
            text={isUpdated ? "Saved" : "Save Changes"}
            icon={isUpdated ? "checkmark" : null}
            onClick={updateUserUsernameEmail}
            disabled={isUpdated}
          />
        </div>
      </div>
    </>
  );
};

export default GeneralProfileInformation;
