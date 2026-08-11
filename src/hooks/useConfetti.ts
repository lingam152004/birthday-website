"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";

const PREMIUM_COLORS = ["#a855f7", "#f5c451", "#fb7185", "#38bdf8", "#ffffff"];

export function useConfetti() {
  const burst = useCallback((originX = 0.5, originY = 0.6) => {
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 45,
      origin: { x: originX, y: originY },
      colors: PREMIUM_COLORS,
      zIndex: 200,
    });
  }, []);

  const sideCannons = useCallback(() => {
    const end = Date.now() + 1000;
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: PREMIUM_COLORS,
        zIndex: 200,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: PREMIUM_COLORS,
        zIndex: 200,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  const fireworks = useCallback(() => {
    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        startVelocity: 55,
        spread: 360,
        ticks: 60,
        zIndex: 200,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.4,
        },
        colors: PREMIUM_COLORS,
        shapes: ["star", "circle"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  const goldShower = useCallback(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      startVelocity: 35,
      gravity: 0.9,
      origin: { x: 0.5, y: -0.1 },
      colors: ["#f5c451", "#ffe9a8", "#d4a017"],
      shapes: ["star"],
      scalar: 1.1,
      zIndex: 200,
    });
  }, []);

  return { burst, sideCannons, fireworks, goldShower };
}
