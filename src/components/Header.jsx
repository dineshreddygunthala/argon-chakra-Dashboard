import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// Mapping of route paths to page names
const routeTitles = {
  '/': 'Dashboard',
  '/tables': 'Tables',
  '/billing': 'Billing',     // ✅ Added Billing page name
  '/profile': 'Profile',
  '/settings': 'Settings',
  // Add more routes as needed
};

const Header = () => {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || 'Page';

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-blue-500 text-white h-[48px] dark:bg-gray-900">
      <h2 className="text-sm font-semibold dark:text-white">{pageTitle}</h2>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 text-xs rounded-md text-gray-700 bg-white placeholder:text-gray-400"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-400 text-sm" />
        </div>
        <FaBell className="text-base cursor-pointer" />
        <button className="flex items-center gap-1 text-xs">
          <FaUserCircle className="text-base" />
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
