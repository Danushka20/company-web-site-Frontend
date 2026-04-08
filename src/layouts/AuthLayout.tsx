import React from 'react';

/**
 * AUTH LAYOUT
 * Full-screen layout for authentication pages (Login, Register).
 */
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        {children}
      </div>
      <footer className="mt-8 text-gray-500 text-xs">
        Secure Multi-Tenant Authentication System
      </footer>
    </div>
  );
};

export default AuthLayout;
