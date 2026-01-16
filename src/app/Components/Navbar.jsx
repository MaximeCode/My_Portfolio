import Link from "next/link";
import Image from "next/image";
import { ma_pdp } from "@/app/layout";

export default function Navbar() {
  const menuItems = [
    {
      label: "Home",
      href: "/",
      color: "goldmenu",
    },
    {
      label: "Qui-suis-je ?",
      href: "/about_me",
      color: "bluemenu",
    },
    {
      label: "Mes compétences",
      href: "/my_skills",
      color: "goldmenu",
    },
    {
      label: "Mes réalisations",
      href: "/my_projects",
      color: "bluemenu",
    },
    {
      label: "Me contacter",
      href: "/contact_me",
      color: "goldmenu",
    },
  ];

  return (
    <div className="py-5 fixed top-0 left-0 right-0 z-50 bg-accent/50 backdrop-blur-sm">
      <nav className="max-h-14 bg-background ring-1 ring-secondary shadow-xl shadow-secondary/50 animate-nav rounded-full w-4/5 mx-auto px-3 lg:px-2 py-1 lg:py-2 flex items-center justify-between">
        {/* Centered Navigation Items */}
        <div className="flex-1 flex justify-center items-center gap-8">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`${item.color} text-foreground text-lg transition-all duration-300 px-4 py-2 border-2 border-transparent rounded-lg hover:scale-105 hover:shadow-lg`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CV Button with Profile Photo and Expanding Animation */}
        <a
          href="#cv" // Fait apparaître un modal contenant le CV à télécharger (fais un truc jolie mais surtout futuriste avec des animations et des effets)
          className="group relative flex items-center gap-0 overflow-hidden rounded-full border-2 border-transparent bg-transparent transition-all duration-300 hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:shadow-lg hover:shadow-[#fbbf24]/50 hover:pr-6"
        >
          {/* Photo de profil */}
          <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-[#fbbf24] flex-shrink-0 transition-all duration-300">
            <div className="w-full h-full bg-[#1e2a5e]/50 flex items-center justify-center">
              <Image
                src={ma_pdp}
                alt="Portrait de Maxime BAUDE"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte qui apparaît */}
          <span className="whitespace-nowrap font-semibold text-[#0a0e27] pl-0 opacity-0 max-w-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-w-[120px] group-hover:pl-3">
            Mon CV
          </span>
        </a>
      </nav>
    </div>
  );
}
