import axios from "axios";
import store from "@/store";

const http = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

http.interceptors.request.use((config) => {
  const token = store.getters["auth/token"];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
);

export default http;
