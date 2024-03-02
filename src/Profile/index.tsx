import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileName } from "./Styles";

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${username}`);
        if (response.ok) {
          const user = await response.json();
          const fullName = user.first_name + " " + user.last_name;
          setUser(fullName);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div>{user !== "" ? <ProfileName>{user}</ProfileName> : "loading..."}</div>
  );
};

export default ProfilePage;
