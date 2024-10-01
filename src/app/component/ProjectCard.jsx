import Image from "next/image";
import React from 'react';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden relative group  ">
      <div className="relative h-52 md:h-72">
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          style={{ objectFit: "contain" }}  // Ensures the entire image is visible
          className="rounded-t-xl"
        />
        <div className="overlay absolute top-0 w-full h-full bg-[#181818] bg-opacity-0
        hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500" ></div>
      </div>
      <div className="text-white py-6 px-4 bg-[#181818]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
