import { Code2, Database, Wrench, Languages } from "lucide-react";

export const skills = {
  frontend: [
    { name: "React", level: 75, icon: "react" },
    { name: "Next.js", level: 75, icon: "nextjs" },
    { name: "TailwindCSS", level: 90, icon: "tailwindcss" },
    { name: "Bootstrap", level: 90, icon: "bootstrap" },
    { name: "JavaScript", level: 80, icon: "javascript" },
    { name: "HTML", level: 95, icon: "html5" },
    { name: "CSS", level: 95, icon: "css3" },
    { name: "Figma", level: 60, icon: "figma" },
    { name: "UI/UX Design", level: 55, icon: "figma" },
  ],
  backend: [
    { name: "Node.js", level: 75, icon: "nodejs" },
    { name: "NPM", level: 70, icon: "npm" },
    { name: "SQL (MySQL, SQLite)", level: 90, icon: "mysql" },
    { name: "PHP", level: 80, icon: "php" },
    { name: "Symfony", level: 70, icon: "symfony" },
    { name: "POO (Programmation Orientée Objet)", level: 80, icon: "poo" },
    { name: "API REST", level: 80, icon: "apirest" },
    { name: "WordPress", level: 70, icon: "wordpress" },
  ],
  tools: [
    { name: "Git/GitHub", level: 90, icon: "github" },
    { name: "IDE (VS Code, Cursor, PHPStorm)", level: 95, icon: "vscode" },
    { name: "Docker", level: 65, icon: "docker" },
    { name: "Vercel", level: 85, icon: "vercel" },
    { name: "Postman, Insomnia", level: 95, icon: "postman" },
  ],
  languages: [
    { name: "Français (langue maternelle)", level: 100, icon: "fr" },
    { name: "Anglais (B2)", level: 75, icon: "gb" },
    { name: "Espagnol (A2)", level: 10, icon: "es" },
  ],
};

export const tabs = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Outils", icon: Wrench },
  { id: "languages", label: "Langues", icon: Languages },
];
