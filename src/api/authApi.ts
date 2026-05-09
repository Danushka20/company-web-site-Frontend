import api from "./axios";

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
    // Backend may use token revocation; implement if available
    // For now, clear client-side token only
    return;
  },
};
