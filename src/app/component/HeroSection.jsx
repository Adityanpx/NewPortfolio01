"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, i am 
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Aditya',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'javascript developer',
        1000,
        'frontend developer',
        1000,
        'fullstach developer',
        1000
      ]}
      wrapper="span"
      speed={25}
      className="sm:text-6xl text-purple-500 lg:text-7xl"
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
           
          </h1>

          <p className="text-[#ABD7BE] text-base mb-6 sm:text-lg lg:text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          {/* Hire Me button */}
          <button className="px-6 w-full sm:w-fit py-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mr-4 text-white">
            Hire Me
          </button>

          {/* Download CV button */}
          <button className="px-6 w-full sm:w-fit mt-3 py-3 rounded-xl text-white hover:bg-slate-200 border 
          border-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            Download CV
          </button>
        </div>

        {/* Image Section */}
        <div className="col-span-5 place-self-center">
          <div className="mt-4 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/hi.png"
              alt="hello it me"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
