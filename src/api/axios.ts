import axios from "axios";
import { authStore } from "../store/authStore";

const api = axios.create({
  baseURL:
    (import.meta.env.VITE_BACKEND_URL as string) || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token to all requests
api.interceptors.request.use(
  (config) => {
    const token = authStore.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const skipUnauthorizedRedirect =
      error.config?.headers?.["X-Skip-Unauthorized-Redirect"] === "true" ||
      error.config?.headers?.get?.("X-Skip-Unauthorized-Redirect") === "true";

    if (error.response?.status === 401 && !skipUnauthorizedRedirect) {
      // Clear auth on unauthorized
      authStore.setToken(null);
      authStore.setUser(null);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
