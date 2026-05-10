import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/authStore";

/**
 * AdminRoute Component
 * Protects admin routes - redirects to home if not authenticated or not admin
 */
const AdminRoute: React.FC = () => {
  const isAuthenticated = authStore.isAuthenticated();
  const user = authStore.user;
  const isAdmin = user?.role === "admin" || user?.role === "Admin";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
