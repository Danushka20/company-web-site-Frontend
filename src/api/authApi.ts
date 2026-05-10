import api from "./axios";
import { authStore } from "../store/authStore";

export const authApi = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post("/api/login", credentials);
    return response.data;
  },

  register: async (payload: any) => {
    const response = await api.post("/api/register", payload);
    return response.data;
  },

  me: async () => {
    const response = await api.get("/api/user");
    return response.data;
  },

  logout: async () => {
    try {
      // Call backend logout endpoint if available
      await api.post("/api/logout", null, {
        headers: {
          "X-Skip-Unauthorized-Redirect": "true",
        },
      });
    } catch (err) {
      // Continue with client-side logout even if backend call fails
    }
    // Clear client-side auth state
    authStore.setToken(null);
    authStore.setUser(null);
  },

  refreshToken: async () => {
    try {
      const response = await api.post("/api/refresh-token");
      const token = response.data?.access_token;
      if (token) {
        authStore.setToken(token);
      }
      return response.data;
    } catch (err) {
      authStore.setToken(null);
      authStore.setUser(null);
      throw err;
    }
  },
};
