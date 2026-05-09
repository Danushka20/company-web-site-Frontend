import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/authStore";

/**
 * ProtectedRoute Component
 * Redirects to login if user is not authenticated
 * Wraps protected routes with auth check
 */
const ProtectedRoute: React.FC = () => {
  const isAuthenticated = authStore.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
