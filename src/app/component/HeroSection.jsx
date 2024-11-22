import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
          Hello, I am{" "}
          <TypeAnimation
            sequence={[
              "Aditya Gavali",
              1000,
              "JavaScript Developer",
              1000,
              "Frontend Developer",
              1000,
              "Full-Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={25}
            className="text-purple-500 sm:text-6xl lg:text-5xl"
            repeat={Infinity}
          />
        </h1>
        <p
          className={`text-white text-base mb-6 sm:text-lg lg:text-base ${playfair.className}`}
        >
          I am a skilled full-stack developer with hands-on experience in
          creating engaging projects in e-commerce. I have participated in
          building an automation builder, creating intelligence software like
          CDR, and many more projects in my previous industry. Additionally, I
          was part of a team developing a chatbot in Python. I am skilled in
          Python programming and have great knowledge in SQL. I am a dedicated learner, always eager to explore
          new technologies to enhance my skills and make valuable contributions
          to innovative projects. I am eagerly waiting to work on live projects
          in industries that handle and evolve cutting-edge technologies.
        </p>
        <div className="social flex text-3xl ml-4  flex-row gap-4 ">
          <Link href="https://github.com/Adityanpx" aria-label="GitHub" className="hover:scale-125  transition-all duration-300">
            <FaGithub className="text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-gavali-b79b4525a/" aria-label="LinkedIn" className="hover:scale-125  transition-all duration-300">
            <FaLinkedin className="text-blue-500" />
          </Link>
          <Link href="https://leetcode.com/u/Adityanpx/" aria-label="LeetCode" className="hover:scale-125  transition-all duration-300">
            <SiLeetcode className="text-yellow-500" />
          </Link>
          <Link 
            href="https://wa.me/918600256200" 
            aria-label="WhatsApp" 
            className="hover:scale-125 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp className="text-green-500" />
          </Link>
        </div>
        <div>
          {/* Add link to resume */}
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 ml-4 mb-5 bg-white text-black hover:bg-purple-400 hover:scale-110 transition-all duration-300">
              See Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-span-5 flex justify-center sm:justify-end items-center">
        <div className="mt-4 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-[0_0_80px_rgba(168,85,247,1)]">
          <Image
            src="/itsme.jpeg"
            alt="Profile picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
