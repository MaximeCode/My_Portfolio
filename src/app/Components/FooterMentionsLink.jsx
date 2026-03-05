"use client";

import { ScrollText } from "lucide-react";
import { Tooltip } from "react-tooltip";

export default function FooterMentionsLink() {
  return (
    <footer className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-30">
      <a
        href="/mentions-legales"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary bg-bg-accent/80 text-secondary shadow-lg hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary"
        data-tooltip-id={"tooltip_link_mentions_legales"}
        data-tooltip-content="Voir les mentions légales"
      >
        <ScrollText className="w-6 h-6" />
      </a>
      <Tooltip id={"tooltip_link_mentions_legales"} />
    </footer>
  );
}
