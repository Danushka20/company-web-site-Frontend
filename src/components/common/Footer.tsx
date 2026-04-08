import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-6 px-8 text-center text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} Company Website. Professional Multi-Tenant SaaS.
      </div>
    </footer>
  );
};

export default Footer;
