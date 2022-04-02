import axios, { AxiosRequestConfig } from "axios";
import { logout } from "./utils/auth";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      const { token } = JSON.parse(user);

      if (config.headers) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export const checkStatus = (exeption: any) => {
  if (exeption.response.status === 401 || exeption.response.status === 403)
    logout();
};
