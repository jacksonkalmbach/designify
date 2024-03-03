import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {

  ProfileWrapper,
} from "./Styles";
import ProfileHeader from "./ProfileHeader";

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
    <ProfileWrapper>
      <ProfileHeader />
      <div>
        <div>Designs</div>
        <div>Lookbooks</div>
        <div>Likes</div>
      </div>
    </ProfileWrapper>
  );
};

export default ProfilePage;
