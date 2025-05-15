// src/components/CreateProjectCard.jsx
import React from "react";

const CreateProjectCard = () => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md h-full text-gray-500 dark:text-gray-300 border border-dashed border-gray-300 dark:border-gray-600 cursor-pointer">
      <div className="text-center">
        <div className="text-3xl">+</div>
        <p className="text-sm mt-1">Create a New Project</p>
      </div>
    </div>
  );
};

export default CreateProjectCard;
