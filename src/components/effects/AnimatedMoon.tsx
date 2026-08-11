"use client";

import { motion } from "framer-motion";

export default function AnimatedMoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-52 md:w-52"
    >
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-accent-gold/30 blur-3xl"
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="relative h-full w-full drop-shadow-glow-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="moonGradient" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#fff8e1" />
            <stop offset="60%" stopColor="#f5c451" />
            <stop offset="100%" stopColor="#d4a017" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#moonGradient)" />
        <circle cx="65" cy="70" r="14" fill="#d4a017" opacity="0.35" />
        <circle cx="120" cy="60" r="8" fill="#d4a017" opacity="0.3" />
        <circle cx="130" cy="120" r="18" fill="#d4a017" opacity="0.3" />
        <circle cx="75" cy="135" r="10" fill="#d4a017" opacity="0.25" />
      </motion.svg>
    </motion.div>
  );
}
