import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ServicesPage from "../pages/ServicesPage.tsx";
import AndonHardwareProductsPage from "../pages/AndonHardwareProductsPage.tsx";
import IoTSolutionProductsPage from "../pages/IoTSolutionProductsPage.tsx";
import SoftwareDevelopmentProductsPage from "../pages/SoftwareDevelopmentProductsPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import UserListPage from "../pages/users/UserListPage.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";

/**
 * APP ROUTES
 * It tells React which component to show depending on the URL in the browser.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
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
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserListPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
