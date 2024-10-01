import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Aboutsection from "./component/Aboutsection";
import ProjectSection from "./component/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto px-12 py-4">
      <Navbar/>
      <HeroSection/>
      <Aboutsection/>
      <ProjectSection/>
      
      </div>
    </main>
  );
}
