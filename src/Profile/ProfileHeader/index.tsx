import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ProfileHeaderContainer,
  ProfileHeaderContent,
  ProfileHeaderDetails,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderName,
  ProfileHeaderText,
  ProfileNameAndImage,
} from "./Styles";
import Button from "../../shared/components/Button";
import {
  checkIfUserIsFollowing,
  followUser,
  getFollowerAndFollowingCount,
} from "../../utils/user/userDatabaseUtils";

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  username: string;
  photoUrl: string;
  isCurrentUser: boolean;
}

const ProfileHeader = ({
  firstName,
  lastName,
  username,
  isCurrentUser,
  photoUrl,
}: ProfileHeaderProps) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const currentUserString = localStorage.getItem("designify_user");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  useEffect(() => {
    const checkIfFollowing = async () => {
      try {
        const isFollowing = await checkIfUserIsFollowing(
          currentUser.uid,
          username
        );
        setIsFollowing(isFollowing);
      } catch (error) {
        console.error("Failed to check if following: ", error);
      }
    };

    const totalFollowers = async () => {
      try {
        const response = await getFollowerAndFollowingCount(username);
        setFollowerCount(response.followersCount);
        setFollowingCount(response.followingCount);
      } catch (error) {
        console.error("Failed to get follower count: ", error);
      }
    };

    checkIfFollowing();
    totalFollowers();
  }, [currentUser, username]);

  const handleFollowUnfollow = () => {};

  return (
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <ProfileNameAndImage>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={photoUrl} />
          </ProfileHeaderImageContainer>
          <ProfileHeaderDetails>
            <ProfileHeaderName>{firstName + " " + lastName} </ProfileHeaderName>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileHeaderText>{username}</ProfileHeaderText>
              <>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <ProfileHeaderText>
                    {followerCount}{" "}
                    {followerCount === 1 ? "Follower" : "Followers"}
                  </ProfileHeaderText>
                  <span>•</span>
                  <ProfileHeaderText>
                    {followingCount} Following
                  </ProfileHeaderText>
                </div>
              </>
              {isCurrentUser ? (
                <div style={{ marginTop: "10px" }}>
                  <Button
                    text="Edit Profile"
                    variant="outlined"
                    onClick={() => navigate(`/${username}/edit`)}
                  />
                </div>
              ) : (
                <div style={{ marginTop: "10px" }}>
                  <Button
                    text={isFollowing ? "Following" : "Follow"}
                    variant={isFollowing ? "outlined" : "primary"}
                    onClick={() => handleFollowUnfollow()}
                  />
                </div>
              )}
            </div>
          </ProfileHeaderDetails>
        </ProfileNameAndImage>
      </ProfileHeaderContent>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
