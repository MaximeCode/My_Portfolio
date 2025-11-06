import "./globals.css";
import { WaveDivider } from "./Components/WaveDivider";
import Script from "next/script";
import Navbar from "./Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-b from-background to-bg-accent">
        <Navbar />
        {children}

        <div className="fixed bottom-0 left-0 right-0 z-10">
          <WaveDivider />
        </div>
      </body>
      <Script src="../../node_modules/flowbite/dist/flowbite.min.js"></Script>
    </html>
  );
}

//// RÉÉCRIRE LES TEXTES ////
