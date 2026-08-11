"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDateISO: string;
  className?: string;
}

function getTimeLeft(targetISO: string) {
  const diff = new Date(targetISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown({ targetDateISO, className = "" }: CountdownProps) {
  const [time, setTime] = useState(() => getTimeLeft(targetDateISO));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft(targetDateISO)), 1000);
    return () => clearInterval(interval);
  }, [targetDateISO]);

  if (!mounted) return null;

  if (time.total <= 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`font-display text-2xl text-shimmer ${className}`}
      >
        The celebration is live! 🎉
      </motion.p>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-5 ${className}`}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="glass-card flex w-16 flex-col items-center rounded-2xl px-2 py-3 shadow-glass sm:w-20"
        >
          <motion.span
            key={unit.value}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-display text-2xl font-semibold tabular-nums text-accent-gold sm:text-3xl"
          >
            {String(unit.value).padStart(2, "0")}
          </motion.span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-foreground/50 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
