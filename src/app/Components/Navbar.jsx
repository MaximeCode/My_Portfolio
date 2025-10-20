import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { WaveDivider } from "./WaveDivider";

export default function Navbar() {
  const menuItems = [
    {
      label: "Home",
      href: "#home",
      color: "#fbbf24",
    },
    {
      label: "Qui-suis-je ?",
      href: "#about",
      color: "#60a5fa",
    },
    {
      label: "Mes réalisations",
      href: "#experience",
      color: "#fbbf24",
    },
    {
      label: "Me contacter",
      href: "#contact",
      color: "#60a5fa",
    },
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50">
      <div className=" bg-[#0a0e27] ring-1 ring-[#fbbf24] shadow-xl shadow-[#fbbf24]/50 animate-nav rounded-full container mx-auto px-3 lg:px-4 py-1 lg:py-4 flex items-center justify-between">
        {/* Centered Navigation Items */}
        <div className="flex-1 flex justify-center items-center gap-8">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={`text-[#f5e6d3] hover:text-[${item.color}] hover:border-[${item.color}] transition-all duration-300 px-4 py-2 border-2 border-transparent rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[${item.color}]/20`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CV Button with Profile Photo */}
        <Button
          asChild
          className="bg-[#fbbf24] hover:bg-[#fbbf24]/90 text-[#0a0e27] gap-2 px-2 py-0.5 rounded-full hover:shadow-[#fbbf24]/50"
        >
          <a href="#cv" className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0a0e27]">
              <Image
                src="https://placehold.co/100.png"
                alt="Maxime BAUDE"
                className="w-full h-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <span>Mon CV</span>
          </a>
        </Button>
      </div>
      {/* <WaveDivider /> */}
    </nav>
  );
}
