"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/types";

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent-rose to-accent-gold sm:left-1/2" />
      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10 ${
              i % 2 === 1 ? "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left" : "sm:text-right"
            }`}
          >
            <span
              className={`absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-gold shadow-glow-gold sm:left-auto sm:translate-x-1/2 ${
                i % 2 === 1 ? "sm:left-0 sm:right-auto sm:-translate-x-1/2" : "sm:right-0"
              }`}
            />
            <div className="glass-card w-full rounded-2xl p-5 shadow-glass">
              <p className="font-display text-sm uppercase tracking-widest text-accent-gold">
                {item.year}
              </p>
              <p className="mt-2 font-body text-foreground/80">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
