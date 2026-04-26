import React from 'react';

/**
 * AUTH LAYOUT
 * Full-screen layout for authentication pages (Login, Register).
 */
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md">
        {children}
      </div>
      <footer className="mt-8 text-xs text-gray-500">
        Secure Multi-Tenant Authentication System
      </footer>
    </div>
  );
};

export default AuthLayout;
