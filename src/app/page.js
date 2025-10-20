"use client";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#141b3d]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />
    </div>
  );
}
