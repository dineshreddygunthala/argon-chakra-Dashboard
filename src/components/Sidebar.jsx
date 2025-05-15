// src/components/Sidebar.jsx
import React, { useContext } from 'react';
import {
  FaUser, FaSignInAlt, FaUserPlus, FaTable,
  FaFileInvoice, FaGlobe, FaMoon, FaSun, FaHome
} from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import argonLogo from '../assets/logo-argon.png';
import chakraLogo from '../assets/logo-chakra.png';

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <aside className="w-56 h-screen bg-white dark:bg-[#0f1535] text-gray-900 dark:text-white shadow-lg flex flex-col justify-between p-3 text-sm">
      {/* Logo */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <img src={argonLogo} alt="Argon" className="w-5 h-5" />
          <h1 className="text-base font-bold tracking-tight">argon |</h1>
          <img src={chakraLogo} alt="Chakra" className="w-18 h-5" />
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-2 tracking-wide">PAGES</div>
          <NavItem icon={<FaHome />} label="Dashboard" to="/" />
          <NavItem icon={<FaTable />} label="Tables" to="/tables" />
          <NavItem icon={<FaFileInvoice />} label="Billing" to="/billing" />
          <NavItem icon={<FaGlobe />} label="RTL" to="/rtl" />

          <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 mt-4 mb-2 tracking-wide">ACCOUNT</div>
          <NavItem icon={<FaUser />} label="Profile" to="/profile" />
          <NavItem icon={<FaSignInAlt />} label="Sign In" to="/signIn" />
          <NavItem icon={<FaUserPlus />} label="Sign Up" to="/signup" />
        </nav>
      </div>

      {/* Footer / Theme Toggle */}
      <div className="space-y-3">
        <button
          onClick={toggleDarkMode}
          className="w-full bg-gray-200 dark:bg-gray-700 text-xs py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center space-y-2 text-xs">
          <p className="leading-tight text-gray-800 dark:text-gray-300">
            Need help? <br /> Check our docs
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded">Docs</button>
          <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-1 rounded">Upgrade</button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 p-2 rounded-md font-medium transition text-sm ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1e2a55]'
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export default Sidebar;
