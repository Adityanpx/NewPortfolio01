"use client";

import { Button } from "../../components/ui/button"; 
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react"; 
import { PiSlidersHorizontalLight} from "react-icons/pi";
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

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="p-5 shadow-md flex justify-between">
        <div className="flex items-center gap-8">
          <Link href={'/'}>
            <img src="/hi.png" width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex">
        <nav className="flex gap-5 mr-28 p-8">
          <Link href="/"> <Button className="text-white 
          hover:text-red-500" variant="link">Home</Button></Link>
          <Link href="/aboutUs"> <Button className="text-white" variant="link">About</Button></Link>
          <Link href="/contact"> <Button className="text-white" variant="link">Contact me</Button></Link>
          <Link href="/"> <Button className="text-white" variant="link">Another Link</Button></Link>
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
        initial={{ x: 500 }} // Change to slide in from the right
        animate={{ x: isSidebarOpen ? 0 : 500 }} // Slide out to the right
        exit={{ x: 500 }} // Exit animation
        transition={{ duration: 0.4 }}
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-64 bg-[#121212] text-white" // Set width here (e.g., w-64 for 16rem)
      >
        <button onClick={closeSidebar} className="p-4">Close</button>
        <nav className="flex gap-5 flex-col p-4">
          <Link href="/"> <Button className="text-white" variant="link">Home</Button></Link>
          <Link href="/aboutUs"> <Button className="text-white" variant="link">About</Button></Link>
          <Link href="/contact"> <Button className="text-white" variant="link">Contact me</Button></Link>
          <Link href="/"> <Button className="text-white" variant="link">Another Link</Button></Link>
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
