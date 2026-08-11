"use client";

import { motion } from "framer-motion";
import { randomInRange } from "@/lib/utils";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export default function Particles({ count = 40, className = "" }: ParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: randomInRange(i + 3, 0, 100),
    top: randomInRange(i + 33, 0, 100),
    size: randomInRange(i + 63, 1, 3.5),
    delay: randomInRange(i + 93, 0, 6),
    duration: randomInRange(i + 123, 4, 9),
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.4, 0.8] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
