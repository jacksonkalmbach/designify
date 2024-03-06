import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileWrapper } from "./Styles";
import {
  getAllUserPostsFromDatabaseByUsername,
  getUserFromDatabaseByUsername,
} from "../utils/user/userDatabaseUtils";
import { UserType } from "../types/userTypes";

import ProfileHeader from "./ProfileHeader";
import ProfileMedia from "./ProfileMedia";

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const currentUserString = localStorage.getItem("designify_user");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (currentUser && currentUser.username === username) {
          const userData = await getUserFromDatabaseByUsername(username);
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user: ", error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const userPosts = await getAllUserPostsFromDatabaseByUsername(username);
        setUserPosts(userPosts);
      } catch (error) {
        console.error("Failed to fetch user posts:", error);
      }
    };

    fetchUser();
    fetchUserPosts();
  }, []);

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
