"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "React Grocery Store",
    description: "This is a grocery store application built with React.",
    image: "/p2.png",
    tag: ["ALL", "Web"],  // Updated tags
    gitUrl: "https://github.com/Adityanpx/Grocery-Store",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Car Rental Application",
    description: "A full-featured car rental application.",
    image: "/rentalcar.png",
    tag: ["ALL", "Web"],  // Updated tags
    gitUrl: "https://github.com/Adityanpx/CarOnRentalweb",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Weather Details Application",
    description: "A task management application for mobile devices.",
    image: "/WeatherApp.png",
    tag: ["ALL"],   // Updated tags
    gitUrl: "https://github.com/Adityanpx/weatherApp",
    previewUrl: "/"
  },
  
  {
    id: 5,
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    image: "/p1.png",
    tag: ["ALL", "Web"],   // Updated tags
    gitUrl: "https://github.com/Adityanpx/MyPortfolioNew01",
    previewUrl: "/"
  }
  
  // Add more projects as needed
];

function ProjectSection() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag) || tag === "All"
  );

  return (
    <>
      <h2 className="text-center  text-4xl font-bold text-white mt-14 ">My Projects</h2>
      <div className="flex flex-row text-white justify-center items-center gap-2 py-6 ">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="App" isSelected={tag === "App"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-2 object-contain">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}  // Corrected: changed from project to project.tag
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
