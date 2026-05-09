import type { User } from "../types/Auth.ts";

export const authStore = {
  user: null as User | null,
  token:
    (typeof window !== "undefined" && localStorage.getItem("token")) || null,

  setUser: (user: User | null) => {
    authStore.user = user;
  },

  setToken: (token: string | null) => {
    authStore.token = token;
    if (typeof window !== "undefined") {
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    }
  },
};
