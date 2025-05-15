// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, desc, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="text-sm text-gray-600 dark:text-gray-300 mb-1">Project</h4>
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">{desc}</p>
        <button className="text-xs px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-white font-semibold">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
