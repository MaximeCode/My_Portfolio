import Image from "next/image";
import { ma_grosse_tete } from "@/app/layout";
import { siteOwner } from "@/app/data/site.config";

export default function LeftColumn() {
  return (
    <>
      {/* Left Side - Profile Photo (1/3 width) */}
      <div className="lg:w-1/3 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#60a5fa] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#fbbf24] shadow-2xl shadow-[#fbbf24]/30 group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full bg-[#1e2a5e]/30 flex items-center justify-center">
              <Image
                src={ma_grosse_tete}
                alt={`Portrait de ${siteOwner.fullName}`}
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
