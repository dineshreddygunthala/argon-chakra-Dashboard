// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import argonLogo from "../assets/logo-argon.png";
import chakraLogo from "../assets/logo-chakra.png";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-10 px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={argonLogo} alt="argon" className="w-5 h-5" />
        <h1 className="text-white font-semibold text-sm">argon |</h1>
        <img src={chakraLogo} alt="chakra" className="w-16 h-5" />
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-6 text-white text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Sign In
        </NavLink>
        <button className="bg-white text-blue-600 font-bold px-4 py-1 rounded text-xs dark:text-gray-100 dark:bg-blue-950">
          FREE DOWNLOAD
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
