import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import TextType from "../Animation/TextType";
import LeftColumn from "./LeftColumn";
import BtnDownloadCV from "./Front/BtnDownloadCV";
import Btn from "./Front/Btn";
import { classNameForIcon } from "@/app/layout";
import { siteOwner } from "@/app/data/site.config";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = siteOwner.fullName;
  const [displayCursor, setDisplayCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setDisplayCursor(false);
    }
  }, [currentIndex, text]);

  return (
    <>
      <section className="container mx-auto px-4 md:px-6 py-20 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center">
          <LeftColumn />
          {/* Right Side - Introduction (2/3 width) */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Name - Animated */}
            <h1 className="text-[#fbbf24] text-4xl lg:text-6xl tracking-wide animate-slide-in-right">
              {displayText}
              <span
                className={`animate-pulse ${displayCursor ? "inline-block" : "hidden"
                  }`}
              >
                |
              </span>
            </h1>

            {/* Job Title - Very Big Style with Animation */}
            <div className="relative animate-slide-in-left">
              <h2 className="mb-4 text-5xl lg:text-7xl text-[#f5e6d3] tracking-tight leading-none">
                Développeur
              </h2>
              <div className="relative inline-block">
                <div className="text-4xl lg:text-6xl font-bold">
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
              <p className="text-lg md:text-xl leading-relaxed">
                Mon objectif est de créer des solutions applicatives aux
                entreprises mais aussi aux particuliers pour résoudre des
                besoins.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Voir mes réalisations */}
              <Btn
                icon={<Eye className={classNameForIcon} />}
                text="Voir mes réalisations"
                href="/my_projects"
              />

              <BtnDownloadCV />
            </div>
          </div>
        </div>
      </section>

      {/* Éléments décoratifs */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-[#60a5fa]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </>
  );
}
