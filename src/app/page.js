"use client";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-bg-accent">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />
    </div>
  );
}

//// ADD ANIMATION ON CURSOR (found the one) ////
//// REFAIRE LES TEXTES ////
