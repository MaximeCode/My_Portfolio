import "./globals.css";
import { WaveDivider } from "./Components/WaveDivider";
import Script from "next/script";
import Navbar from "./Components/Navbar";
import FooterMentionsLink from "./Components/FooterMentionsLink";
import PageTransition from "./Components/PageTransition";

export const classNameForIcon = "w-5 h-5 group-hover:animate-bounce";
export const ma_pdp = "/img/ma_grosse_tete.jpg";
export const ma_grosse_tete = "/img/Photo_BAUDE_Maxime_3_ma_grosse_tete.jpg";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-b from-background to-bg-accent relative">
        <Navbar />
        <PageTransition>{children}</PageTransition>

        <FooterMentionsLink />

        <div className="fixed bottom-0 left-0 right-0 z-10">
          <WaveDivider />
        </div>
      </body>
      <Script
        src="https://kit.fontawesome.com/c9030b2646.js"
        crossorigin="anonymous"
      ></Script>
      <Script src="../../node_modules/flowbite/dist/flowbite.min.js"></Script>
    </html>
  );
}
