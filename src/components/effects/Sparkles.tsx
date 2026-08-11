"use client";

import { motion } from "framer-motion";
import { randomInRange } from "@/lib/utils";

interface SparklesProps {
  active: boolean;
  count?: number;
}

export default function Sparkles({ active, count = 16 }: SparklesProps) {
  if (!active) return null;

  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (360 / count) * i,
    distance: randomInRange(i + 5, 60, 140),
    delay: randomInRange(i + 55, 0, 0.3),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {sparkles.map((s) => {
        const x = Math.cos((s.angle * Math.PI) / 180) * s.distance;
        const y = Math.sin((s.angle * Math.PI) / 180) * s.distance;
        return (
          <motion.span
            key={s.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent-gold"
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0 }}
            transition={{ duration: 0.9, delay: s.delay, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
