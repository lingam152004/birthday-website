import { Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center font-body text-sm text-foreground/50 md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-accent-gold" />
          <span>
            Made with celebration, for {SITE_CONFIG.celebrantName}.
          </span>
        </div>
        <p> </p>
      </div>
    </footer>
  );
}
