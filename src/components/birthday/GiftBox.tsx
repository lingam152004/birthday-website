"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import SparklesEffect from "@/components/effects/Sparkles";
import { cn } from "@/lib/utils";

interface GiftBoxProps {
  onOpen?: () => void;
  label?: string;
  className?: string;
}

export default function GiftBox({ onOpen, label = "Click to open your gift", className = "" }: GiftBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen?.();
  };

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <button
        aria-label="Open gift"
        onClick={handleOpen}
        data-cursor-pointer
        className="relative flex h-40 w-40 items-center justify-center focus:outline-none"
      >
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />

        <SparklesEffect active={isOpen} count={20} />

        {/* Lid */}
        <motion.div
          className="absolute top-6 z-20 h-6 w-28 rounded-md bg-gradient-to-r from-accent-rose to-primary shadow-lg"
          animate={
            isOpen
              ? { y: -60, rotate: -35, opacity: 0 }
              : { y: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 0.6, ease: "backOut" }}
        />

        {/* Box body */}
        <motion.div
          className="relative z-10 flex h-24 w-28 items-center justify-center rounded-lg bg-gradient-to-b from-primary to-primary-dark shadow-glow"
          animate={
            isOpen
              ? { scale: [1, 1.08, 1] }
              : { rotate: [0, -2, 2, -2, 0] }
          }
          transition={
            isOpen
              ? { duration: 0.5 }
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-accent-gold/80" />
          <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-accent-gold/80" />

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: -70 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                className="absolute z-30 text-accent-gold"
              >
                <Gift size={36} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      {!isOpen && (
        <p className="mt-4 font-body text-sm text-foreground/60">{label}</p>
      )}
    </div>
  );
}
