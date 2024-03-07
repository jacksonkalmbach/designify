export const fetchPosts = async () => {
  const response = await fetch("http://localhost:3001/posts");
  const posts = await response.json();
  return posts;
};

export const fetchPostByUsername = async (username: string) => {
  const response = await fetch(`http://localhost:3001/posts/user/${username}`);
  const posts = await response.json();
  return posts;
};
