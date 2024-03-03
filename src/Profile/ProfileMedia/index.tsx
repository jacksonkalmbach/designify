import React, { useState } from "react";
import {
  MediaContainer,
  MediaFilter,
  MediaFiltersContainer,
  MediaItem,
  ProfileImagesWrapper,
} from "./Styles";

const ProfileMedia = () => {
  const [mediaType, setMediaType] = useState<"designs" | "lookbooks" | "liked">(
    "designs"
  );
  const handleClick = (type: "designs" | "lookbooks" | "liked") => {
    setMediaType(type);
  };
  return (
    <ProfileImagesWrapper>
      <MediaFiltersContainer>
        <MediaFilter
          onClick={() => handleClick("designs")}
          active={mediaType === "designs"}
        >
          Designs
        </MediaFilter>
        <MediaFilter
          onClick={() => handleClick("lookbooks")}
          active={mediaType === "lookbooks"}
        >
          Lookbooks
        </MediaFilter>
        <MediaFilter
          onClick={() => handleClick("liked")}
          active={mediaType === "liked"}
        >
          Liked
        </MediaFilter>
      </MediaFiltersContainer>
      <MediaContainer>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </MediaContainer>
    </ProfileImagesWrapper>
  );
};

export default ProfileMedia;
