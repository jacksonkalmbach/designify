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

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  username: string;
}

const ProfileHeader = ({
  firstName,
  lastName,
  username,
}: ProfileHeaderProps) => {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <ProfileNameAndImage>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src="https://media.licdn.com/dms/image/D4E03AQFseatAMo8cnA/profile-displayphoto-shrink_800_800/0/1679333450208?e=1715212800&v=beta&t=8c0ZQaKEjyVaLbIOJLpfZW0GtrzR8qV2_scsXGVUIuM" />
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
                  <ProfileHeaderText>20 Followers</ProfileHeaderText>
                  <span>•</span>
                  <ProfileHeaderText>50 Following</ProfileHeaderText>
                </div>
              </>
              <div style={{ marginTop: "10px" }}>
                <Button
                  text="Edit Profile"
                  onClick={() => {}}
                  variant="outlined"
                />
              </div>
            </div>
          </ProfileHeaderDetails>
        </ProfileNameAndImage>
      </ProfileHeaderContent>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
