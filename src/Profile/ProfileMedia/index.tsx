import React, { useState } from "react";
import {
  MediaContainer,
  MediaFilter,
  MediaFiltersContainer,
  ProfileImagesWrapper,
} from "./Styles";

import PostPreview from "../../Post/PostPreview";
import useFetchData from "../../hooks/useFetchData";
import { PostType } from "../../types/postTypes";

const ProfileMedia = ({ username }: { username: string }) => {
  const [mediaType, setMediaType] = useState<"designs" | "lookbooks" | "liked">(
    "designs"
  );

  const {
    data: posts,
    loading,
    error,
  } = useFetchData<PostType[]>(
    process.env.REACT_APP_SERVER_BASE_URL + `/posts/user/${username}`
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
        {posts &&
          posts.map((post: any) => (
            <PostPreview
              key={post.post_id}
              id={post.post_id}
              imageUrl={post.image_url}
              creator={post.username}
              creatorPhotoUrl={post.photo_url}
            />
          ))}
      </MediaContainer>
    </ProfileImagesWrapper>
  );
};

export default ProfileMedia;
