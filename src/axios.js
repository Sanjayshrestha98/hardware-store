import axios from "axios";

// console.log("token", localStorage.getItem("user_token"));

const accessToken = localStorage.getItem("user_token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URI,
  withCredentials: true,
  headers: {
    Authorization: accessToken,
  },
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("user_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


export default instance;
