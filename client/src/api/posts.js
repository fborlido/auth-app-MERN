import axios from "axios";

const postsAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/posts",
  withCredentials: true,
});

export const getPosts = async () => {
  const { data } = await postsAPI.get("/");
  return data;
};

export const createPost = async ({ title, content }) => {
  const { data } = await postsAPI.post("/create", { title, content });
  return data;
};

export const deletePost = async (id) => {
  const { data } = await postsAPI.delete(`/${id}`);
  return data;
};