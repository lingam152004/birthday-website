"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoView } from "react-photo-view";
import { Maximize2 } from "lucide-react";
import type { GalleryPhoto } from "@/lib/constants";

export default function GalleryCard({
  photo,
  index,
}: {
  photo: GalleryPhoto;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl glass-card shadow-glass"
      data-cursor-pointer
    >
      <PhotoView src={photo.src}>
        <div className="relative cursor-zoom-in overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.caption}
            width={600}
            height={600}
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="p-4 font-body text-sm text-white">{photo.caption}</p>
          </div>
          <div className="absolute right-3 top-3 rounded-full bg-black/40 p-2 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <Maximize2 size={14} className="text-white" />
          </div>
        </div>
      </PhotoView>
      <p className="p-3 font-body text-xs text-foreground/60 sm:hidden">
        {photo.caption}
      </p>
    </motion.div>
  );
}
