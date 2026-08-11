"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            animate={{ rotate: [0, -8, 8, -4, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-accent-gold shadow-glow"
          >
            <PartyPopper size={30} />
          </motion.div>

          <div className="mb-4 font-display text-sm uppercase tracking-[0.4em] text-foreground/60">
            Preparing the celebration
          </div>

          <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent-rose to-accent-gold"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-3 font-body text-xs tabular-nums text-foreground/40">
            {Math.floor(Math.min(progress, 100))}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
