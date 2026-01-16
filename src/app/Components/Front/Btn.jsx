import Link from "next/link";

export default function Btn({ icon, text, href, size = "lg" }) {
  const padding =
    size === "lg" ? "px-8 py-4" : size === "md" ? "px-6 py-3" : "px-4 py-2";
  return (
    <Link
      href={href}
      className={`cursor-pointer animate-scale-in group inline-flex items-center gap-3 ${padding} bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] text-[#0a0e27] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#60a5fa]/50 transition-all duration-300 hover:scale-105 w-fit`}
    >
      {icon}
      <span className={`text-${size}`}>{text}</span>
    </Link>
  );
}
