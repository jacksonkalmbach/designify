export const checkUserExistsInDatabase = async (uid: string) => {
  const response = await fetch(`http://localhost:3001/users/exists/${uid}`);
  const userExists = await response.json();
  return userExists;
};

export const createUserInDatabase = async (
  uid: string,
  email: string | null,
  password: string | null,
  firstName: string,
  lastName: string,
  photoUrl: string | null
) => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      email,
      password,
      firstName,
      lastName,
      photoUrl,
    }),
  });
  const userCreated = await response.json();
  return userCreated;
};

export const getUserFromDatabaseByUid = async (uid: string) => {
  const response = await fetch(`http://localhost:3001/users/uid/${uid}`);
  const user = await response.json();
  return user;
};

export const getUserFromDatabaseByUsername = async (
  username: string | undefined
) => {
  if (username === undefined) {
    return;
  }
  const response = await fetch(`http://localhost:3001/users/${username}`);
  const user = await response.json();
  return user;
};

export const getAllUserPostsFromDatabaseByUsername = async (
  username: string | undefined
) => {
  const response = await fetch(`http://localhost:3001/posts/user/${username}`);
  const posts = await response.json();
  return posts;
};

export const updateUsernameEmailInDatabase = async (
  uid: string,
  username: string,
  email: string
) => {
  const response = await fetch(
    `http://localhost:3001/users/username-email/${uid}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
      }),
    }
  );
  const userUpdated = await response.json();
  return userUpdated;
};

export const checkIfUserIsFollowing = async (uid: string, username: string) => {
  const response = await fetch(
    `http://localhost:3001/users/follows/${uid}/${username}`
  );
  const isFollowing = await response.json();
  return isFollowing;
};

export const followUser = async (
  followerUid: string,
  followedUsername: string
) => {
  const response = await fetch(`http://localhost:3001/users/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      followerUid,
      followedUsername,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to follow user");
  }

  const userUpdated = await response.json();
  return userUpdated;
};

// get follow count
export const getFollowerAndFollowingCount = async (username: string) => {
  const response = await fetch(
    `http://localhost:3001/users/follow-count/${username}`
  );
  const followCount = await response.json();
  return followCount;
};
