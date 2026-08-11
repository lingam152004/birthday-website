"use client";

import { useState } from "react";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AnimatePresence } from "framer-motion";
import { Clapperboard } from "lucide-react";
import { GALLERY_PHOTOS } from "@/lib/constants";
import GalleryCard from "@/components/gallery/GalleryCard";
import Slideshow from "@/components/gallery/Slideshow";

export default function GalleryGrid() {
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <p className="font-body text-sm text-foreground/50">
          {GALLERY_PHOTOS.length} moments captured
        </p>
        <button
          onClick={() => setSlideshowOpen(true)}
          data-cursor-pointer
          className="glass-card flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm text-foreground/80 shadow-glass transition hover:text-accent-gold"
        >
          <Clapperboard size={16} />
          Slideshow mode
        </button>
      </div>

      <PhotoProvider
        maskOpacity={0.92}
        speed={() => 400}
        easing={(type) =>
          type === 2 ? "cubic-bezier(0.36,0,0.66,-0.56)" : "cubic-bezier(0.34,1.56,0.64,1)"
        }
      >
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {GALLERY_PHOTOS.map((photo, i) => (
            <GalleryCard key={photo.id} photo={photo} index={i} />
          ))}
        </div>
      </PhotoProvider>

      <AnimatePresence>
        {slideshowOpen && (
          <Slideshow photos={GALLERY_PHOTOS} onClose={() => setSlideshowOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
