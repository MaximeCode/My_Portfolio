"use client";

import { ScrollText, Shield } from "lucide-react";
import { Tooltip } from "react-tooltip";

const footerLinkClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-secondary bg-bg-accent/80 text-secondary shadow-lg hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary";

export default function FooterMentionsLink() {
  return (
    <footer className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-30 flex items-center gap-3">
      <a
        href="/mentions-legales"
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClass}
        data-tooltip-id="tooltip_mentions_legales"
        data-tooltip-content="Mentions légales"
      >
        <ScrollText className="w-6 h-6" />
      </a>
      <a
        href="/politique-confidentialite"
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClass}
        data-tooltip-id="tooltip_politique_confidentialite"
        data-tooltip-content="Politique de confidentialité"
      >
        <Shield className="w-6 h-6" />
      </a>
      <Tooltip id="tooltip_mentions_legales" />
      <Tooltip id="tooltip_politique_confidentialite" />
    </footer>
  );
}
