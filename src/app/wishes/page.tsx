"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import FloatingStars from "@/components/effects/FloatingStars";
import GiftBox from "@/components/birthday/GiftBox";
import TypingText from "@/components/ui/TypingText";
import { useConfetti } from "@/hooks/useConfetti";
import { SITE_CONFIG, WISHES } from "@/lib/constants";

export default function WishesPage() {
  const [giftOpened, setGiftOpened] = useState(false);
  const { burst, goldShower } = useConfetti();

  const handleGiftOpen = () => {
    goldShower();
    burst(0.5, 0.55);
    setGiftOpened(true);
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <FloatingStars count={20} />

      <section className="relative z-10 px-6 pb-28 pt-32 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-accent-gold">
            From all of us
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
            Birthday <span className="text-shimmer">Wishes</span>
          </h1>
        </motion.div>

        <div className="mx-auto mb-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          {WISHES.map((wish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card rounded-3xl p-6 shadow-glass"
            >
              <SparklesIcon size={18} className="mb-3 text-accent-gold" />
              <p className="min-h-[4.5rem] font-display text-lg leading-relaxed text-foreground/90">
                <TypingText text={wish} speed={22} startDelay={i * 150} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center">
          <AnimatePresence mode="wait">
            {!giftOpened ? (
              <motion.div
                key="gift"
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass-card flex flex-col items-center rounded-[2.5rem] p-10 shadow-glow"
              >
                <p className="mb-6 text-center font-display text-xl text-foreground/90">
                  One more thing before you go...
                </p>
                <GiftBox onOpen={handleGiftOpen} />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="glass-card flex flex-col items-center rounded-[2.5rem] p-10 text-center shadow-glow-gold sm:p-14"
              >
                <h2 className="text-shimmer font-display text-4xl font-bold sm:text-5xl">
                  Happy Birthday!
                </h2>
                <p>Happy Birthday, Vennila! 🌙❤️

Sila per namma life-la late-ah vandhalum...
Manasula seekiram idam pidichiduvanga.

Nee... appadi oruthanga. 🤍

Have the happiest birthday! ✨
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}