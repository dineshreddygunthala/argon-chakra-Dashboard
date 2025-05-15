// src/components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import CreateProjectCard from "./CreateProjectCard";

const projectData = [
  {
    title: "Modern",
    desc: "As Uber works through a huge amount of internal management turmoil...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    title: "Scandinavian",
    desc: "Music is something that every person has his or her own opinion about.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    title: "Minimalist",
    desc: "Different people have different taste, and various types of music.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
  },
];

const ProjectsSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Projects</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Architects design houses</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
        <CreateProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;
