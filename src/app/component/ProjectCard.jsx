import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden relative group">
      <div className="relative h-52 md:h-72">
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          style={{ objectFit: "contain" }}  // Ensures the entire image is visible
          className="rounded-t-xl"
        />
        <div className="overlay absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
  <div className="flex flex-col items-center space-y-2">
    <Link
      href={gitUrl}  // Link to GitHub URL for the project
      className="h-14 w-14 border-2 flex items-center justify-center rounded-full border-[#ADB7BE] hover:border-white group/link"
    >
      <FaGithub className="h-10 w-10 text-[#ADB7BE] transition-colors duration-300 group-hover/link:text-white" />
    </Link>
    <p className="text-[#ADB7BE] hover:text-white ">Get The Code</p>
  </div>
</div>

      </div>
      <div className="text-white py-6 px-4 bg-[#181818]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
