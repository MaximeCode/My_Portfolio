import React, { useState, useEffect } from "react";
import { Download, User } from "lucide-react";
import TextType from "../Animation/TextType";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Maxime BAUDE";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#141b3d] to-[#0a0e27] overflow-hidden">
      <section className="container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Profile Photo (1/3 width) */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#fbbf24] shadow-2xl shadow-[#fbbf24]/30 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-[#1e2a5e]/30 flex items-center justify-center">
                  <User className="w-32 h-32 text-[#f5e6d3]/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Introduction (2/3 width) */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Name - Animated */}
            <h1 className="text-[#fbbf24] text-6xl tracking-wide animate-slide-in-right">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Job Title - Very Big Style with Animation */}
            <div className="relative animate-slide-in-left">
              <h2 className="mb-4 text-7xl text-[#f5e6d3] tracking-tight leading-none">
                Développeur
              </h2>
              <div className="relative inline-block">
                <div className="text-5xl lg:text-6xl font-bold">
                  <TextType
                    text={["Web", "Front-End", "Back-End", "Full-Stack"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="_"
                    textColors={["#60a5fa"]}
                  />
                </div>
                {/* Soulignement vague */}
                <div className="h-1 w-full bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] rounded-full animate-expand mt-2"></div>
              </div>
            </div>

            {/* Description */}
            <div className="text-[#f5e6d3]/70 space-y-4 animate-fade-in">
              <p className="text-xl leading-relaxed">
                Mon objectif est de créer des solutions applicatives aux
                entreprises mais aussi aux particuliers pour résoudre des
                besoins.
              </p>
            </div>

            {/* Download CV Button */}
            <button className="animate-scale-in group mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] text-[#0a0e27] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#60a5fa]/50 transition-all duration-300 hover:scale-105 w-fit">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="text-lg">Télécharger mon CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Éléments décoratifs */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-[#60a5fa]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
