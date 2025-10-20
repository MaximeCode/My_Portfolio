import React, { useState } from "react";
import { Code2, Palette, Database, Wrench } from "lucide-react";

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "React", level: 90, logo: "⚛️" },
      { name: "Next.js", level: 85, logo: "▲" },
      { name: "TailwindCSS", level: 95, logo: "🎨" },
      { name: "JavaScript", level: 90, logo: "JS" },
      { name: "TypeScript", level: 80, logo: "TS" },
    ],
    design: [
      { name: "Figma", level: 85, logo: "🎯" },
      { name: "Adobe XD", level: 75, logo: "📐" },
      { name: "Photoshop", level: 70, logo: "🖼️" },
      { name: "Illustrator", level: 65, logo: "✏️" },
    ],
    backend: [
      { name: "Node.js", level: 80, logo: "🟢" },
      { name: "Python", level: 75, logo: "🐍" },
      { name: "MongoDB", level: 70, logo: "🍃" },
      { name: "PostgreSQL", level: 75, logo: "🐘" },
    ],
    tools: [
      { name: "Git", level: 90, logo: "📦" },
      { name: "VS Code", level: 95, logo: "💻" },
      { name: "Docker", level: 65, logo: "🐳" },
      { name: "Vercel", level: 85, logo: "▲" },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "design", label: "Design", icon: Palette },
    { id: "backend", label: "Backend", icon: Database },
    { id: "tools", label: "Outils", icon: Wrench },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
          Mes <span className="text-secondary">Compétences</span>
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Découvrez les technologies et outils que je maîtrise pour créer des
          expériences digitales exceptionnelles
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-bg-accent/50 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-muted/30 shadow-2xl">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-secondary text-background shadow-lg shadow-secondary/50 scale-105"
                    : "text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Content */}
      <div className="bg-bg-accent/30 backdrop-blur-sm rounded-2xl p-8 border border-muted/30 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-muted/20 rounded-xl p-6 border border-muted/40 hover:border-secondary/50 hover:bg-muted/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-105"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.logo}
                  </div>
                  <span className="text-foreground font-semibold text-lg">
                    {skill.name}
                  </span>
                </div>
                <span className="text-secondary font-bold text-xl">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-background/50 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `progressFill 1s ease-out ${
                      index * 0.1
                    }s backwards`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </div>
  );
}
