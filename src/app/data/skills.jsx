import { Code2, Database, Wrench, Languages } from "lucide-react";

export const skills = {
  frontend: [
    { name: "React", level: 75 },
    { name: "Next.js", level: 75 },
    { name: "TailwindCSS", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "Figma", level: 60 },
    { name: "UI/UX Design", level: 55 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "NPM", level: 70 },
    { name: "SQL (MySQL, SQLite)", level: 90 },
    { name: "PHP", level: 80 },
    { name: "Symfony", level: 70 },
    { name: "POO (Programmation Orientée Objet)", level: 80 },
    { name: "API REST", level: 80 },
    { name: "WordPress", level: 70 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "IDE (VS Code, Cursor, PHPStorm)", level: 95 },
    { name: "Docker", level: 65 },
    { name: "Vercel", level: 85 },
    { name: "Postman, Insomnia", level: 95 },
  ],
  languages: [
    { name: "Français (langue maternelle)", level: 100 },
    { name: "Anglais (B2)", level: 75 },
    { name: "Espagnol (A2)", level: 10 },
  ],
};

export const tabs = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Outils", icon: Wrench },
  { id: "languages", label: "Langues", icon: Languages },
];
