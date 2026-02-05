import { Linkedin, Github } from "lucide-react";

export const mySocialMedias = [
    {
        name: "LinkedIn",
        icon: (
            <Linkedin className="w-12 h-12 text-[#60a5fa] transition-all duration-500 group-hover:text-[#fbbf24] relative z-10" />
        ),
        url: "https://linkedin.com/in/maximebaude/",
    },
    {
        name: "GitHub",
        icon: (
            <Github className="w-12 h-12 text-[#60a5fa] transition-all duration-500 group-hover:text-[#fbbf24] relative z-10" />
        ),
        url: "https://github.com/maximecode",
    },
];