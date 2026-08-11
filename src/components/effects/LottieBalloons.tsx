"use client";

import Lottie from "lottie-react";
import balloonsAnimation from "../../../public/lottie/balloons.json";

export default function LottieBalloons({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <Lottie
        animationData={balloonsAnimation}
        loop
        autoplay
        className="h-full w-full opacity-80"
      />
    </div>
  );
}
