import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://test-blog-api.ficuslife.com/api/v1",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
