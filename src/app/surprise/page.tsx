"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";

import FloatingStars from "@/components/effects/FloatingStars";
import Particles from "@/components/effects/Particles";
import AnimatedMoon from "@/components/effects/AnimatedMoon";
import LottieBalloons from "@/components/effects/LottieBalloons";
import Fireworks from "@/components/effects/Fireworks";
import GiftBox from "@/components/birthday/GiftBox";
import BirthdayCake from "@/components/birthday/BirthdayCake";
import { useConfetti } from "@/hooks/useConfetti";
import { ENDING_MESSAGE, SITE_CONFIG } from "@/lib/constants";

type Stage = "intro" | "gift" | "cake" | "finale";

export default function SurprisePage() {
  const [stage, setStage] = useState<Stage>("intro");
  const { burst, fireworks, sideCannons } = useConfetti();

  const openGift = () => {
    burst(0.5, 0.6);
    setTimeout(() => setStage("cake"), 900);
  };

  const onAllCandlesBlown = () => {
    sideCannons();
    setTimeout(() => {
      fireworks();
      setStage("finale");
    }, 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05030a] px-6 pb-28 pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0616] via-[#05030a] to-black" />
      <FloatingStars count={40} />
      <Particles count={30} />
      <LottieBalloons className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] opacity-60" />
      {stage === "finale" && <Fireworks />}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-accent-gold"
        >
          One last surprise
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 font-display text-4xl font-bold sm:text-5xl"
        >
          Under the <span className="text-shimmer">Moonlight</span>
        </motion.h1>

        <AnimatedMoon />

        <div className="mt-14 flex min-h-[22rem] flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <p className="mb-8 max-w-sm font-body text-white/60">
                  Somewhere between the stars and the moonlight, one more gift
                  is waiting for you.
                </p>
                <button
                  onClick={() => setStage("gift")}
                  data-cursor-pointer
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-rose px-8 py-4 font-body text-sm font-semibold shadow-glow transition-transform hover:scale-105"
                >
                  <SparklesIcon size={16} />
                  Reveal the Surprise
                </button>
              </motion.div>
            )}

            {stage === "gift" && (
              <motion.div
                key="gift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <p className="mb-6 font-body text-white/60">
                  Go on — open it.
                </p>
                <GiftBox onOpen={openGift} label="Click to open" />
              </motion.div>
            )}

            {stage === "cake" && (
              <motion.div
                key="cake"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <p className="mb-6 font-body text-white/60">
                  Make a wish, then blow out every candle.
                </p>
                <BirthdayCake
                  interactive
                  candleCount={5}
                  onAllBlown={onAllCandlesBlown}
                />
              </motion.div>
            )}

            {stage === "finale" && (
              <motion.div
                key="finale"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                className="glass-card flex flex-col items-center rounded-[2.5rem] p-10 shadow-glow-gold sm:p-14"
              >
                <h2 className="text-shimmer mb-4 font-display text-3xl font-bold sm:text-4xl">
                  Happy Birthday, {SITE_CONFIG.celebrantName}
                </h2>
                <p className="max-w-md font-body text-white/70">
                  {ENDING_MESSAGE}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
