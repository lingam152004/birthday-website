export type Theme = "light" | "dark";

export interface FloatingItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export interface TimelineEntry {
  year: string;
  label: string;
}

export interface Quote {
  quote: string;
  author: string;
}
