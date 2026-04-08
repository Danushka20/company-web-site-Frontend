import React from 'react';

const Sidebar: React.FC<{ activeItem?: string }> = ({ activeItem }) => {
  return (
    <aside className="w-64 bg-gray-900 text-gray-300 min-h-screen p-4 flex flex-col">
      <div className="text-white text-xl font-bold mb-8 px-2">Navigation</div>
      <nav className="flex-1 space-y-2">
        <a href="/dashboard" className={`block px-4 py-2 rounded transition ${activeItem === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}>
          Dashboard Overview
        </a>
        <a href="/users" className={`block px-4 py-2 rounded transition ${activeItem === 'users' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}>
          Manage Team
        </a>
        <a href="/products" className={`block px-4 py-2 rounded transition ${activeItem === 'products' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}>
          Inventory
        </a>
      </nav>
      <div className="pt-4 border-t border-gray-800">
        <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white">Settings</button>
      </div>
    </aside>
  );
};

export default Sidebar;
