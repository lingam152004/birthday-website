"use client";

import { motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const { isPlaying, toggle } = useSound(SITE_CONFIG.musicSrc, {
    loop: true,
    volume: 0.4,
    autoPlay: true,
  });

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={toggle}
      aria-label={isPlaying ? "Pause birthday music" : "Play birthday music"}
      data-cursor-pointer
      className="glass-card fixed bottom-6 right-6 z-[120] flex items-center gap-2 rounded-full px-4 py-3 shadow-glass"
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        <Music2
          size={16}
          className={cn("text-accent-gold", isPlaying && "animate-pulse")}
        />
      </div>
      {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      <span className="hidden font-body text-xs text-foreground/70 sm:inline">
        {isPlaying ? "Playing" : "Play music"}
      </span>
    </motion.button>
  );
}
