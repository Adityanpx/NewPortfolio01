import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Aboutsection from "./component/Aboutsection";
import ProjectSection from "./component/ProjectSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto px-12 py-4">
      <Navbar/>
      <HeroSection/>
      <Aboutsection/>
      <ProjectSection/>
      <EmailSection/>
      
      </div>
      <Footer/>
    </main>
  );
}
