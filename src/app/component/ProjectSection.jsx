import React from "react";
import ProjectCard from "./ProjectCard";
import { PiDesk } from "react-icons/pi";

const ProjectData = [
  {
    id: 1,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/WeatherApp.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 2,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/rentalcar.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 3,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 4,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 5,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 6,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 7,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
  {
    id: 8,
    title: "React Grocery Store",
    description: "helllo...this is a description",
    image: "/hi.png",
    tag: ["ALL", "Web"],
  },
];

function ProjectSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4 object-contain">
        {ProjectData.map((project) => (
            <ProjectCard
             key={project.id}
             title={project.title}
             description={project.description}
             imgUrl={project.image}
             tags={project}
             />
        ))}

      </div>
    </>
  );
}

export default ProjectSection;
