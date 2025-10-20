import { Button } from "@radix-ui/themes";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Job title animation
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Web", "Front-End", "Back-End", "Full-Stack"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Maxime BAUDE";

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [text, currentIndex]);

  return (
    <section className="container mx-auto px-6 py-20 min-h-screen flex items-center">
      <div className="w-full flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side - Profile Photo (1/3 width) */}
        <div className="lg:w-1/3 flex justify-center mt-20">
          <div className="relative">
            <div className="w-80 h-80 rounded-full border-8 border-white overflow-hidden shadow-2xl shadow-[#60a5fa]/20">
              <Image
                src="https://placehold.co/600.png"
                alt="Maxime BAUDE"
                className="w-full h-full object-cover"
                width={320}
                height={320}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-[#fbbf24]/30 -z-10"></div>
          </div>
        </div>

        {/* Right Side - Introduction (2/3 width) */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {/* Name - Animated */}
          <h1 className="text-[#fbbf24] text-6xl tracking-wide animate-slide-in-right">
            {displayText}
          </h1>

          {/* Job Title - Very Big Style with Animation */}
          <div className="relative animate-slide-in-left">
            <h2 className="mb-4 text-7xl text-[#60a5fa] tracking-tight leading-none animate-gradient">
              Développeur
            </h2>
            <div className="relative inline-block">
              <div className="overflow-hidden h-15">
                <h2
                  key={currentRole}
                  className="text-5xl lg:text-6xl font-bold text-[#fbbf24] role-text"
                >
                  {roles[currentRole]}
                </h2>
              </div>
              {/* Soulignement vague */}
              <div className="h-1 w-full bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] rounded-full animate-expand"></div>
            </div>
          </div>

          {/* Description */}
          <div className="text-[#f5e6d3] space-y-4 animate-fade-in">
            <p className="text-xl leading-relaxed">
              Mon objectif est de créer des solutions applicatives aux
              entreprises mais aussi aux particuliers pour résoudre des besoins.
            </p>
          </div>

          {/* Download CV Button */}
          <Button
            asChild
            className="bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] hover:opacity-90 text-[#0a0e27] gap-3 px-6 py-5 rounded-full w-fit shadow-lg shadow-[#fbbf24]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#60a5fa]/40 animate-fade-in"
          >
            <a href="#download-cv" className="flex items-center">
              <Download className="w-7 h-7" />
              <span>Télécharger mon CV</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
