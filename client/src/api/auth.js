import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth",
  withCredentials: true,
});

export const getUser = async () => {
  const { data } = await authAPI.get("/user");
  return data;
};

export const logoutUser = async () => {
  const { data } = await authAPI.post("/logout");
  return data;
};

export const loginUser = async ({ email, password }) => {
  const { data } = await authAPI.post("/login", { email, password });
  return data;
};

export const registerUser = async ({ name, email, password }) => {
  const { data } = await authAPI.post("/register", { name, email, password });
  return data;
};
