"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { randomInRange } from "@/lib/utils";

interface FloatingStarsProps {
  count?: number;
  className?: string;
}

export default function FloatingStars({ count = 24, className = "" }: FloatingStarsProps) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: randomInRange(i + 7, 0, 100),
    top: randomInRange(i + 47, 0, 100),
    size: randomInRange(i + 87, 6, 16),
    delay: randomInRange(i + 117, 0, 4),
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute animate-twinkle text-accent-gold"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <Star size={s.size} fill="currentColor" strokeWidth={0} />
        </motion.div>
      ))}
    </div>
  );
}
