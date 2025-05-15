// src/components/ProfileInfoCard.jsx
import React from "react";

const ProfileInfoCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Profile Information</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">
        Hi, I’m Alec Thompson. Decisions: If you can’t decide, the answer is no. If two equally
        difficult paths, choose the one more painful in the short term.
      </p>
      <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
        <li><strong>Full Name:</strong> Alec M. Thompson</li>
        <li><strong>Mobile:</strong> (44) 123 1234 123</li>
        <li><strong>Email:</strong> alechthompson@mail.com</li>
        <li><strong>Location:</strong> United States</li>
        <li><strong>Social Media:</strong> 🐦 📘 📸</li>
      </ul>
    </div>
  );
};

export default ProfileInfoCard;
