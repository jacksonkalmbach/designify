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

export const getUserFromDatabase = async (uid: string) => {
  const response = await fetch(`http://localhost:3001/users/uid/${uid}`);
  const user = await response.json();
  return user;
};
