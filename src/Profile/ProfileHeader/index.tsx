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

const ProfileHeader = () => {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <ProfileNameAndImage>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src="https://media.licdn.com/dms/image/D4E03AQFseatAMo8cnA/profile-displayphoto-shrink_800_800/0/1679333450208?e=1715212800&v=beta&t=8c0ZQaKEjyVaLbIOJLpfZW0GtrzR8qV2_scsXGVUIuM" />
          </ProfileHeaderImageContainer>
          <ProfileHeaderDetails>
            <ProfileHeaderName>Jackson Kalmbach</ProfileHeaderName>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileHeaderText>jacksonkalmbach</ProfileHeaderText>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <ProfileHeaderText>20 Followers</ProfileHeaderText>
                <span>•</span>
                <ProfileHeaderText>50 Following</ProfileHeaderText>
              </div>
            </div>
          </ProfileHeaderDetails>
        </ProfileNameAndImage>
      </ProfileHeaderContent>
      <div>
        <Button text="Edit Profile" onClick={() => {}} />
      </div>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
