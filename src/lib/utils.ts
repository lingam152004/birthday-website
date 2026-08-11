import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Deterministic seeded PRNG (mulberry32). Uses only integer/bitwise
 * operations, which produce bit-identical results across all JS engines —
 * unlike Math.sin()-based tricks, which can drift slightly between server
 * and client and cause React hydration mismatches.
 */
export function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function randomInRange(seed: number, min: number, max: number) {
  return min + seededRandom(seed) * (max - min);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}