"use client";

import { motion } from "motion/react";

export default function Title({ text, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center mb-16 ${className}`}
    >
      <h1 className="text-5xl font-bold text-[#fbbf24] mb-4">{text}</h1>
    </motion.div>
  );
}
