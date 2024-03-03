import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileWrapper } from "./Styles";
import { getUserFromDatabaseByUsername } from "../utils/user/userDatabaseUtils";
import { User } from "../types/userTypes";

import ProfileHeader from "./ProfileHeader";
import ProfileMedia from "./ProfileMedia";

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserFromDatabaseByUsername(username);
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [username]);

  return (
    <ProfileWrapper>
      {user && (
        <ProfileHeader
          firstName={user.firstName}
          lastName={user.lastName}
          username={user.username}
        />
      )}
      <ProfileMedia />
    </ProfileWrapper>
  );
};

export default ProfilePage;
