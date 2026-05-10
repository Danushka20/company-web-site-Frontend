import { useCallback } from "react";
import { authStore } from "../store/authStore";
import { authApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";

/**
 * useAuth Hook
 * Provides convenient access to auth state and functions
 */
export const useAuth = () => {
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      navigate("/");
    }
  }, [navigate]);

  return {
    user: authStore.user,
    token: authStore.token,
    isAuthenticated: authStore.isAuthenticated(),
    logout,
    setUser: authStore.setUser,
    setToken: authStore.setToken,
  };
};
