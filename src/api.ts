import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const login = async(data: { mail: string; password: string }) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exeption: any) {
    return {
      error: true,
      exeption,
    };
  }
};



export const register = async (data: { mail: string; password: string, username: string }) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exeption: any) {
    return {
      error: true,
      exeption,
    };
  }
};