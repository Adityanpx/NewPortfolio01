import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Aboutsection from "./component/Aboutsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto px-12 py-4">
      <Navbar/>
      <HeroSection/>
      <Aboutsection/>
      
      </div>
    </main>
  );
}
