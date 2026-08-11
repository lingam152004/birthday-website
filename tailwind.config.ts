import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "#a855f7",
          light: "#d8b4fe",
          dark: "#7e22ce",
        },
        accent: {
          gold: "#f5c451",
          rose: "#fb7185",
          sky: "#38bdf8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(251,113,133,0.3), transparent 40%), radial-gradient(circle at 50% 80%, rgba(56,189,248,0.3), transparent 45%)",
        "gold-shimmer":
          "linear-gradient(110deg, #f5c451 0%, #ffe9a8 20%, #f5c451 40%, #f5c451 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(168,85,247,0.5)",
        "glow-gold": "0 0 40px -10px rgba(245,196,81,0.6)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
