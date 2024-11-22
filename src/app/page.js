"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Aboutsection from "./component/Aboutsection";
import ProjectSection from "./component/ProjectSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/gif.gif')" }}
    >
      <div className="container mx-auto px-12 py-4">
        {/* Navbar Animation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <Navbar />
        </motion.div>

        {/* Hero Section Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.div>

        {/* About Section Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <Aboutsection />
        </motion.div>

        {/* Project Section Animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          <ProjectSection />
        </motion.div>

        {/* Email Section Animation */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          <EmailSection />
        </motion.div>
      </div>

      {/* Footer Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
