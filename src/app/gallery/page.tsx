"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import FloatingStars from "@/components/effects/FloatingStars";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
        <AnimatedBackground />
        <FloatingStars count={14} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-accent-gold">
            Captured Moments
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
            The <span className="text-shimmer">Gallery</span>
          </h1>
          <p className="mx-auto max-w-xl font-body text-foreground/60">
            A collection of memories worth celebrating — click any photo to
            explore, or launch the slideshow for the full experience.
          </p>
        </motion.div>
      </div>

      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
