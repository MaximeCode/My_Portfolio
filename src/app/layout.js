import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
      <Script src="../../node_modules/flowbite/dist/flowbite.min.js"></Script>
    </html>
  );
}
