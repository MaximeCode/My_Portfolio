'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ma_pdp } from "@/app/layout";
import { siteOwner, cvPath } from "@/app/data/site.config";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const menuItems = [
    {
      label: "Home",
      href: "/",
      color: "goldmenu",
    },
    {
      label: "Qui suis-je ?",
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

  useEffect(() => {
    if (!isOpen) return;

    const onDocumentMouseDown = (event) => {
      // Close the mobile menu only when clicking outside the navbar.
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocumentMouseDown);
    return () => document.removeEventListener("mousedown", onDocumentMouseDown);
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      className="py-5 fixed top-0 left-0 right-0 z-50 bg-accent/50 backdrop-blur-sm"
    >
      <nav className="max-h-8 md:max-h-14 bg-background ring-1 ring-secondary shadow-xl shadow-secondary/50 animate-nav rounded-full w-4/5 mx-auto px-3 lg:px-2 py-1 lg:py-2 flex items-center justify-between">
        {/* Brand / title ONLY on XL screens (desktop)*/}
        {isHome ? null : (
          <Link
            href="/"
            className="flex items-center rounded-full px-2 xl:px-6 py-1 xl:py-2.5 bg-gradient-to-r from-[#0f1640] to-[#141b3d] hover:shadow-lg hover:shadow-primary/40 xl:hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-base font-extrabold tracking-wide text-[#60a5fa] whitespace-nowrap text-center">
              {siteOwner.fullName}
            </span>
          </Link>
        )}

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex flex-1 justify-evenly items-center gap-4 xl:gap-8">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`${item.color} text-foreground text-md text-center transition-all duration-300 px-2 xl:px-4 py-2 rounded-lg hover:scale-105 hover:shadow-lg`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CV Button with Profile Photo and Expanding Animation (desktop) */}
        <div className="hidden lg:block">
          <a
            download
            filename={cvPath}
            href={cvPath}
            className="group relative flex items-center gap-0 overflow-hidden rounded-full border-2 border-transparent bg-transparent transition-all duration-300 hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:shadow-lg hover:shadow-[#fbbf24]/50 hover:pr-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Photo de profil */}
            <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-[#fbbf24] flex-shrink-0 transition-all duration-300">
              <div className="w-full h-full bg-[#1e2a5e]/50 flex items-center justify-center">
                <Image
                  src={ma_pdp}
                  alt={`Portrait de ${siteOwner.fullName}`}
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
        </div>

        {/* Burger button for mobile & tablet */}
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm text-foreground rounded-full lg:hidden hover:bg-secondary/20 focus:outline-none focus:ring-1 focus:ring-secondary ml-auto"
          aria-controls="navbar-mobile"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Ouvrir le menu principal</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile & tablet menu (collapsible) */}
      {isOpen && (
        <div
          id="navbar-mobile"
          className="lg:hidden w-4/5 mx-auto mt-3 rounded-3xl bg-background ring-1 ring-secondary shadow-xl shadow-secondary/50 animate-nav"
        >
          <ul className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${item.color} block w-full text-foreground text-base transition-all duration-300 px-4 py-2 rounded-lg hover:scale-[1.02] hover:shadow-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                download
                filename={cvPath}
                href={cvPath}
                className="inline-flex justify-center items-center gap-2 md:gap-3 w-full text-center font-semibold text-[#0a0e27] bg-[#fbbf24] px-4 py-2 rounded-lg shadow-md shadow-[#fbbf24]/50 hover:shadow-lg transition-all duration-300 group"
                style={{ zIndex: 1 }}
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2 md:gap-3 transition-colors duration-300 group-hover:text-[#0a0e27]">
                  <Download className="w-5 h-5" />
                  Mon Curriculum Vitae
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
