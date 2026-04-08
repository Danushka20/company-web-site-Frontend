import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import DashboardPage from '../pages/dashboard/DashboardPage.tsx';
import UserListPage from '../pages/users/UserListPage.tsx';
import DashboardLayout from '../layouts/DashboardLayout.tsx';

/**
 * APP ROUTES
 * It tells React which component to show depending on the URL in the browser.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserListPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
