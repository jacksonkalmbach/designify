import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Button from "../../../../shared/components/Button";
import InputField from "../../../../shared/components/InputField";
import { UserType } from "../../../../types/userTypes";

interface OutletContextType {
  user: {
    first_name: string;
    last_name: string;
    location: string;
  } | null;
}

const AccountSettings = () => {
  const { user } = useOutletContext<OutletContextType>();
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string | undefined>();

  useEffect(() => {
    if (user) {
      const fullName = `${user.first_name} ${user.last_name}`;
      setName(fullName);
    }
  }, [user]);

  return (
    <>
      {name !== "" && (
        <>
          <InputField
            placeholder="Name"
            type="text"
            label="Name"
            value={name}
          />
          <InputField
            placeholder="Location"
            type="text"
            label="Location"
            value={location}
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
            onClick={() => {}}
            disabled={isUpdated}
          />
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
