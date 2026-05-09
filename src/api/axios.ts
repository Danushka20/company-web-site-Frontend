import axios from "axios";

const api = axios.create({
  baseURL:
    (import.meta.env.VITE_BACKEND_URL as string) || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
