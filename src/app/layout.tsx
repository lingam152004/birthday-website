import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import CustomCursor from "@/components/layout/CustomCursor";
import MusicPlayer from "@/components/ui/MusicPlayer";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.siteTitle,
  description: SITE_CONFIG.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased custom-cursor-active`}
      >
        <Loader />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
          <MusicPlayer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
