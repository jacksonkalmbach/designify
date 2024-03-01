import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${username}`);
        if (response.ok) {
          const user = await response.json();
          setUser(user.first_name);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [username]);

  return <div>{user ? user : "loading..."}</div>;
};

export default ProfilePage;
