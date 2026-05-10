import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ServicesPage from "../pages/ServicesPage.tsx";
import AndonHardwareProductsPage from "../pages/AndonHardwareProductsPage.tsx";
import IoTSolutionProductsPage from "../pages/IoTSolutionProductsPage.tsx";
import SoftwareDevelopmentProductsPage from "../pages/SoftwareDevelopmentProductsPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ProjectsPage from "../pages/ProjectsPage.tsx";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.tsx";
import InternsPage from "../pages/InternsPage.tsx";
import InternDetailsPage from "../pages/InternDetailsPage.tsx";
import StrengthPage from "../pages/StrengthPage.tsx";
import PermanentEmployeeDetailsPage from "../pages/PermanentEmployeeDetailsPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import UserListPage from "../pages/users/UserListPage.tsx";
import AdminDashboard from "../pages/admin/AdminDashboard.tsx";
import ProjectsManagementPage from "../pages/admin/ProjectsManagementPage.tsx";
import AddProjectPage from "../pages/admin/AddProjectPage.tsx";
import LoginPage from "../pages/auth/LoginPage.tsx";
import RegisterPage from "../pages/auth/RegisterPage.tsx";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";

/**
 * APP ROUTES
 * It tells React which component to show depending on the URL in the browser.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/strength" element={<StrengthPage />} />
      <Route
        path="/strength/employee/:employeeId"
        element={<PermanentEmployeeDetailsPage />}
      />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      <Route path="/interns" element={<InternsPage />} />
      <Route path="/interns/:internId" element={<InternDetailsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:serviceSlug" element={<ServicesPage />} />
      <Route
        path="/services/softwareDevelopment/products"
        element={<SoftwareDevelopmentProductsPage />}
      />
      <Route
        path="/services/iotSolutions/products"
        element={<IoTSolutionProductsPage />}
      />
      <Route
        path="/services/andonHardware/products"
        element={<AndonHardwareProductsPage />}
      />
      <Route path="/contact" element={<ContactPage />} />

      {/* Auth Routes (login page removed - use modal or home for auth) */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/home" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<ProjectsManagementPage />} />
        <Route path="/admin/projects/add" element={<AddProjectPage />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
