"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import type { GalleryPhoto } from "@/lib/constants";

interface SlideshowProps {
  photos: GalleryPhoto[];
  startIndex?: number;
  onClose: () => void;
}

export default function Slideshow({ photos, startIndex = 0, onClose }: SlideshowProps) {
  const [index, setIndex] = useState(startIndex);
  const [playing, setPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(next, 3200);
    return () => clearInterval(interval);
  }, [playing, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  const photo = photos[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[400] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
    >
      <button
        aria-label="Close slideshow"
        onClick={onClose}
        className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={18} />
      </button>

      <div className="relative flex h-[70vh] w-full max-w-4xl items-center justify-center px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={photo.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="100vw"
              className="rounded-2xl object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-4 max-w-md text-center font-body text-sm text-white/70">
        {photo.caption}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <button
          aria-label="Previous photo"
          onClick={prev}
          className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
          className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          aria-label="Next photo"
          onClick={next}
          className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="mt-3 font-body text-xs text-white/40">
        {index + 1} / {photos.length}
      </p>
    </motion.div>
  );
}
