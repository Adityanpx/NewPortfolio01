"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
                    Hello, I am{" "}
                    <TypeAnimation
                        sequence={["Aditya Gavali", 1000, "JavaScript Developer", 1000, "Frontend Developer", 1000, "Full-Stack Developer", 1000]}
                        wrapper="span"
                        speed={25}
                        className="text-purple-500 sm:text-6xl lg:text-5xl"
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ABD7BE] text-base mb-6 sm:text-lg lg:text-base">
                I am a skilled full-stack developer with hands-on experience in creating engaging projects in e-commerce. I have participated in building an automation builder, creating intelligence software like CDR, and many more projects in my previous industry. Additionally, I was part of a team developing a chatbot in Python. I am skilled in Python programming. I am a dedicated learner, always eager to explore new technologies to enhance my skills and make valuable contributions to innovative projects. I am eagerly waiting to work on live projects in industries that handle and evolve cutting-edge technologies.
                </p>
            </div>
            <div className="col-span-5 flex justify-center sm:justify-end items-center">
                <div className="mt-4 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                    <Image src="/itsme.jpeg" alt="Profile picture" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
