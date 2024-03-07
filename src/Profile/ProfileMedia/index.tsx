import React, { useEffect, useState } from "react";
import {
  MediaContainer,
  MediaFilter,
  MediaFiltersContainer,
  MediaItem,
  ProfileImagesWrapper,
} from "./Styles";
import PostPreview from "../../Post/PostPreview";

const ProfileMedia = ({ username }: { username: string }) => {
  const [mediaType, setMediaType] = useState<"designs" | "lookbooks" | "liked">(
    "designs"
  );
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await fetch(
          `http://localhost:3001/posts/user/${username}`
        );
        const data = await response.json();
        setPosts(data);
        console.log("data", data);
        setLoading(false);
      };
      fetchPosts();
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }, []);

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
        {posts.map((post: any) => (
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
