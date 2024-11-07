"use client"
import { Button } from "../../components/ui/button"; 
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react"; 
import { motion } from "framer-motion";
import { VscThreeBars } from "react-icons/vsc";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Use useCallback to memoize the handleClickOutside function
  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  }, []); // Empty dependency array because this function doesn't rely on external state or props

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, handleClickOutside]); // Added handleClickOutside to dependencies

  return (
    <>
      <div className="p-5 shadow-md flex justify-between">
        <div className="flex items-center gap-8">
          <Link href={'/'}>
            {/* <img src="/eagle_2.png" width={100} height={100} alt="logo" /> */}
          </Link>
        </div>
        <div className="hidden md:flex">
          <nav className="flex gap-5 mr-28 p-8">
            <Link href="/"> 
              <Button className="text-white  hover:scale-125  transform  transition-all duration-300" variant="link">Home</Button>
            </Link>
            <Link href="/aboutUs"> 
              <Button className="text-white  hover:scale-125 transform  transition-all duration-300" variant="link">About</Button>
            </Link>
            <Link href="/contact"> 
              <Button className="text-white hover:scale-125  transition-all duration-300" variant="link">Contact me</Button>
            </Link>
            <Link href="/"> 
              <Button className="text-white hover:scale-125  transition-all duration-300" variant="link">Another Link</Button>
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Button onClick={toggleSidebar} className="md:hidden bg-purple-500">
            <VscThreeBars />
          </Button>
        </div>
      </div>
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#121212] text-white z-50 shadow-lg transform transition-transform`}
      >
        <button onClick={closeSidebar} className="p-4 text-white hover:text-red-500 transition-colors duration-300">Close</button>
        <nav className="flex gap-5 flex-col p-4">
          <Link href="/">
            <Button
              className="text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 transform px-4 py-2 rounded-lg"
              variant="link"
            >
              Home
            </Button>
          </Link>
          <Link href="/aboutUs">
            <Button
              className="text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 transform px-4 py-2 rounded-lg"
              variant="link"
            >
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              className="text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 transform px-4 py-2 rounded-lg"
              variant="link"
            >
              Contact me
            </Button>
          </Link>
          <Link href="/">
            <Button
              className="text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 transform px-4 py-2 rounded-lg"
              variant="link"
            >
              Another Link
            </Button>
          </Link>
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
