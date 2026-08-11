"use client";

import { motion } from "framer-motion";
import { randomInRange } from "@/lib/utils";

const COLORS = ["#a855f7", "#fb7185", "#38bdf8", "#f5c451", "#f472b6"];

interface FloatingBalloonsProps {
  count?: number;
  className?: string;
}

export default function FloatingBalloons({ count = 8, className = "" }: FloatingBalloonsProps) {
  const balloons = Array.from({ length: count }, (_, i) => {
    const left = randomInRange(i + 1, 2, 96);
    const delay = randomInRange(i + 21, 0, 5);
    const duration = randomInRange(i + 41, 10, 18);
    const size = randomInRange(i + 61, 34, 64);
    const color = COLORS[i % COLORS.length];
    return { id: i, left, delay, duration, size, color };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-[-20%]"
          style={{ left: `${b.left}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-140vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.svg
            width={b.size}
            height={b.size * 1.25}
            viewBox="0 0 60 75"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="30" cy="28" rx="26" ry="28" fill={b.color} opacity={0.9} />
            <ellipse cx="21" cy="18" rx="7" ry="10" fill="white" opacity={0.25} />
            <path d="M30 56 L30 75" stroke={b.color} strokeWidth="1" opacity={0.5} />
            <path d="M25 56 L30 62 L35 56" fill={b.color} opacity={0.9} />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  );
}
