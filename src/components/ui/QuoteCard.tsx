"use client";

import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";
import type { Quote } from "@/types";

export default function QuoteCard({ quote, author }: Quote) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card relative flex h-full flex-col justify-between rounded-3xl p-6 shadow-glass sm:p-8"
    >
      <QuoteIcon className="mb-4 text-primary/60" size={26} />
      <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
        {quote}
      </p>
      <p className="mt-6 font-body text-sm text-foreground/50">— {author}</p>
    </motion.div>
  );
}
