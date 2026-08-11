"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { damping: 40, stiffness: 60 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 60 });

  const blob1X = useTransform(springX, (v) => v * 30);
  const blob1Y = useTransform(springY, (v) => v * 30);
  const blob2X = useTransform(springX, (v) => v * -25);
  const blob2Y = useTransform(springY, (v) => v * -25);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-aurora-gradient opacity-70" />
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent-rose/25 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent-sky/20 blur-[130px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
