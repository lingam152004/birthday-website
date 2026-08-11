"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BirthdayCakeProps {
  candleCount?: number;
  onAllBlown?: () => void;
  interactive?: boolean;
  className?: string;
}

/**
 * An animated birthday cake. When `interactive` is true, clicking each
 * candle "blows it out"; once all candles are out, `onAllBlown` fires.
 */
export default function BirthdayCake({
  candleCount = 5,
  onAllBlown,
  interactive = true,
  className = "",
}: BirthdayCakeProps) {
  const [lit, setLit] = useState<boolean[]>(Array(candleCount).fill(true));

  const blowCandle = (index: number) => {
    if (!interactive) return;
    setLit((prev) => {
      const next = [...prev];
      next[index] = false;
      if (next.every((l) => !l)) {
        setTimeout(() => onAllBlown?.(), 300);
      }
      return next;
    });
  };

  const allOut = lit.every((l) => !l);

  return (
    <div className={cn("relative mx-auto w-full max-w-sm select-none", className)}>
      {/* Candles */}
      <div className="relative z-10 flex justify-center gap-4 pb-1">
        {lit.map((isLit, i) => (
          <button
            key={i}
            aria-label={isLit ? "Blow out candle" : "Candle blown out"}
            onClick={() => blowCandle(i)}
            className="flex flex-col items-center focus:outline-none"
            data-cursor-pointer
          >
            <AnimatePresence>
              {isLit && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.4 }}
                  animate={{
                    scale: [1, 1.15, 0.95, 1.1, 1],
                  }}
                  transition={{
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                    exit: { duration: 0.3 },
                  }}
                  className="mb-0.5 h-4 w-2.5 rounded-full bg-gradient-to-t from-accent-gold via-amber-300 to-yellow-100 shadow-glow-gold"
                />
              )}
            </AnimatePresence>
            <div
              className={cn(
                "h-8 w-1.5 rounded-sm bg-gradient-to-b",
                i % 2 === 0 ? "from-primary to-primary-dark" : "from-accent-rose to-rose-600"
              )}
            />
          </button>
        ))}
      </div>

      {/* Cake tiers */}
      <div className="relative">
        <div className="mx-auto h-8 w-[85%] rounded-t-2xl bg-gradient-to-b from-rose-200 to-rose-300 shadow-inner" />
        <div className="mx-auto -mt-1 h-16 w-full rounded-2xl bg-gradient-to-b from-white to-rose-100 shadow-glass" />
        <div className="absolute inset-x-6 top-6 flex justify-around">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-gold to-amber-500"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {allOut && interactive && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center font-display text-lg text-accent-gold"
          >
            Make a wish ✨
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
