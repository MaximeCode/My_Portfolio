"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollText, Shield, Scale } from "lucide-react";
import { Tooltip } from "react-tooltip";

const RADIUS = 40;
const ANGLE_1 = 60 * (Math.PI / 180);
const ANGLE_2 = 180 * (Math.PI / 180);

const actionButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-secondary bg-bg-accent/90 text-secondary shadow-lg hover:bg-primary hover:text-background hover:border-primary focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 ease-out origin-center";

export default function FooterMentionsLink() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimeoutRef.current) return;
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const x1 = Math.round(RADIUS * Math.cos(ANGLE_1));
  const y1 = -Math.round(RADIUS * Math.sin(ANGLE_1));
  const x2 = Math.round(RADIUS * Math.cos(ANGLE_2));
  const y2 = -Math.round(RADIUS * Math.sin(ANGLE_2));

  return (
    <footer
      className="absolute bottom-6 right-6 z-30 flex items-center justify-center"
      aria-label="Liens légaux"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      {/* Action buttons: animate from center to position on hover */}
      <a
        href="/mentions-legales"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute ${actionButtonClass}`}
        style={{
          transform: isOpen
            ? `translate(calc(-50% + ${x1}px), calc(-50% + ${y1}px)) scale(1)`
            : "translate(-50%, -50%) scale(0.4)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        data-tooltip-id="tooltip_mentions_legales"
        data-tooltip-content="Mentions légales"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <ScrollText className="h-5 w-5" />
      </a>
      <a
        href="/politique-confidentialite"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute ${actionButtonClass}`}
        style={{
          transform: isOpen
            ? `translate(calc(-50% + ${x2}px), calc(-50% + ${y2}px)) scale(1)`
            : "translate(-50%, -50%) scale(0.4)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        data-tooltip-id="tooltip_politique_confidentialite"
        data-tooltip-content="Politique de confidentialité"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <Shield className="h-5 w-5" />
      </a>

      {/* Trigger: center circle, menu shows on hover */}
      <div
        role="group"
        aria-label="Liens légaux"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary bg-bg-accent/90 text-secondary shadow-lg hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 cursor-default"
        data-tooltip-id="tooltip_speed_dial_trigger"
        data-tooltip-content="Mentions légales & Confidentialité"
      >
        <Scale className="h-6 w-6" aria-hidden />
      </div>

      <Tooltip id="tooltip_mentions_legales" />
      <Tooltip id="tooltip_politique_confidentialite" />
      <Tooltip id="tooltip_speed_dial_trigger" />
    </footer>
  );
}
