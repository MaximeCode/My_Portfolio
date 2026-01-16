import { Download } from "lucide-react";

export default function BtnDownloadCV({ size = "lg" }) {
  const padding =
    size === "lg" ? "px-8 py-4" : size === "md" ? "px-6 py-3" : "px-4 py-2";
  return (
    // Download CV Button
    <a
      download
      filename="/docs/CV-Maxime_BAUDE.pdf"
      href="/docs/CV-Maxime_BAUDE.pdf"
      className={`cursor-pointer animate-scale-in group inline-flex items-center gap-3 ${padding} bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] text-[#0a0e27] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#60a5fa]/50 transition-all duration-300 hover:scale-105 w-fit`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      <span className={`text-${size}`}>Télécharger mon CV</span>
    </a>
  );
}
