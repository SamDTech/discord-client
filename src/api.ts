import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const login = async (prop: { email: string; password: string }) => {
  try {
    const { data } = await apiClient.post("/auth/login", prop);
    return data.token;
  } catch (exeption: any) {
    return {
      error: true,
      exeption,
    };
  }
};

export const register = async (data: {
  mail: string;
  password: string;
  username: string;
}) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exeption: any) {
    return {
      error: true,
      exeption,
    };
  }
};
