"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import AnimatedBackground from "@/components/effects/AnimatedBackground";
import FloatingBalloons from "@/components/effects/FloatingBalloons";
import Particles from "@/components/effects/Particles";
import FloatingStars from "@/components/effects/FloatingStars";
import BirthdayCake from "@/components/birthday/BirthdayCake";
import Countdown from "@/components/ui/Countdown";
import Timeline from "@/components/ui/Timeline";
import QuoteCard from "@/components/ui/QuoteCard";
import { SITE_CONFIG, QUOTES, TIMELINE } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { y: 30, opacity: 0, duration: 0.8 })
        .from(
          "[data-hero-title] .word",
          { y: 60, opacity: 0, duration: 1, stagger: 0.08 },
          "-=0.4"
        )
        .from("[data-hero-subtitle]", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(
          "[data-hero-cake]",
          { y: 40, opacity: 0, scale: 0.8, duration: 1 },
          "-=0.6"
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = SITE_CONFIG.heroTagline.split(" ");

  return (
    <div ref={sectionRef}>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-24"
      >
        <AnimatedBackground />
        <FloatingBalloons count={7} />
        <Particles count={45} />
        <FloatingStars count={18} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <div
            data-hero-eyebrow
            className="glass-card mb-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70"
          >
            <Sparkles size={14} className="text-accent-gold" />
            Happy Birthday {SITE_CONFIG.celebrantName}
          </div>

          <h1
            data-hero-title
            className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="word mr-4 inline-block last:mr-0">
                <span
                  className={
                    i === titleWords.length - 1 ? "text-shimmer" : "text-foreground"
                  }
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-subtitle
            className="mb-10 max-w-xl font-body text-base text-foreground/60 sm:text-lg"
          >
            {SITE_CONFIG.heroSubtitle}
          </p>

          <div data-hero-cta className="mb-14 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/wishes"
              data-cursor-pointer
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-rose px-7 py-3.5 font-body text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Start Celebration
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              data-cursor-pointer
              className="glass-card rounded-full px-7 py-3.5 font-body text-sm font-semibold text-foreground/80 shadow-glass transition hover:text-accent-gold"
            >
              View Gallery
            </Link>
          </div>

          <div data-hero-cake className="mb-10">
            <BirthdayCake interactive={false} candleCount={5} className="max-w-[260px]" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-foreground/40">
              Counting down to the big day
            </p>
            <Countdown targetDateISO={SITE_CONFIG.birthdayDateISO} />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/40"
        >
          <div className="h-9 w-5 rounded-full border border-foreground/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          </div>
        </motion.div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative px-6 py-28">
        <div data-reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-accent-gold">
            A journey worth celebrating
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Every chapter led here
          </h2>
        </div>
        <div data-reveal>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      {/* QUOTES SECTION */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-accent-gold">
            Words to celebrate 
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Something I Wanted to Say
          </h2>
        </div>
        <div data-reveal className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <QuoteCard key={i} quote={q.quote} author={q.author} />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section data-reveal className="relative px-6 pb-28 pt-8 text-center">
        <div className="glass-card mx-auto max-w-3xl rounded-[2.5rem] p-10 shadow-glow sm:p-16">
          <h2 className="mb-4 font-display text-3xl font-semibold sm:text-4xl">
            The celebration is just getting started
          </h2>
          <p className="mx-auto mb-8 max-w-md font-body text-foreground/60">
            Explore the wishes, revisit the memories, and unwrap one final surprise.
          </p>
          <Link
            href="/surprise"
            data-cursor-pointer
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-gold to-amber-400 px-8 py-4 font-body text-sm font-semibold text-background shadow-glow-gold transition-transform hover:scale-105"
          >
            Unwrap the Surprise
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}