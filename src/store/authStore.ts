import type { User } from "../types/Auth.ts";

interface AuthStore {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  isAuthenticated: () => boolean;
  clear: () => void;
}

// Initialize token from localStorage
const getInitialToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

export const authStore: AuthStore = {
  user: null,
  token: getInitialToken(),

  setUser: (user: User | null) => {
    authStore.user = user;
  },

  setToken: (token: string | null) => {
    authStore.token = token;
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
  },

  isAuthenticated: () => {
    return !!authStore.token;
  },

  clear: () => {
    authStore.user = null;
    authStore.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },
};
