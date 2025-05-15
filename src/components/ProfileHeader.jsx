// src/components/ProfileHeader.jsx
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
          S
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Alec Thompson</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">alec@simmple.com</p>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 gap-3">
        <button className="px-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white">Overview</button>
        <button className="px-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white">Teams</button>
        <button className="px-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white">Projects</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
