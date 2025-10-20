import { WaveDivider } from "./WaveDivider";
import { User } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    {
      label: "Home",
      href: "#home",
      color: "goldmenu",
    },
    {
      label: "Qui-suis-je ?",
      href: "#about",
      color: "bluemenu",
    },
    {
      label: "Mes réalisations",
      href: "#experience",
      color: "goldmenu",
    },
    {
      label: "Me contacter",
      href: "#contact",
      color: "bluemenu",
    },
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50">
      <div className=" bg-background ring-1 ring-secondary shadow-xl shadow-secondary/50 animate-nav rounded-full container mx-auto px-3 lg:px-4 py-1 lg:py-4 flex items-center justify-between">
        {/* Centered Navigation Items */}
        <div className="flex-1 flex justify-center items-center gap-8">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={`${item.color} text-foreground transition-all duration-300 px-4 py-2 border-2 border-transparent rounded-lg hover:scale-105 hover:shadow-lg`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CV Button with Profile Photo and Expanding Animation */}
        <a
          href="#cv"
          className="group relative flex items-center gap-0 overflow-hidden rounded-full border-2 border-transparent bg-transparent transition-all duration-300 hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:shadow-lg hover:shadow-[#fbbf24]/50 hover:pr-6"
        >
          {/* Photo de profil */}
          <div className="relative z-10 w-10 h-10 rounded-full overflow-hidden border-2 border-[#fbbf24] flex-shrink-0 transition-all duration-300">
            <div className="w-full h-full bg-[#1e2a5e]/50 flex items-center justify-center">
              <User className="w-6 h-6 text-foreground/50" />
            </div>
          </div>

          {/* Texte qui apparaît */}
          <span className="whitespace-nowrap font-semibold text-[#0a0e27] pl-0 opacity-0 max-w-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-w-[120px] group-hover:pl-3">
            Mon CV
          </span>
        </a>
      </div>
      <WaveDivider />
    </nav>
  );
}
