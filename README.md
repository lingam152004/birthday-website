# 🎉 Birthday Celebration Website

A premium, interactive birthday wishes website built with Next.js 15, TypeScript,
Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, canvas-confetti, Lottie,
and React Photo View.

Four pages: **Home**, **Gallery**, **Birthday Wishes**, and **Surprise** — each
designed to feel elegant, premium, and celebratory rather than romantic.

---

## 1. Installation

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

---

## 2. Project Structure

```
src/
  app/
    layout.tsx          → root layout (fonts, navbar, footer, loader, music player)
    page.tsx             → Home page
    gallery/page.tsx      → Gallery page
    wishes/page.tsx        → Birthday Wishes page
    surprise/page.tsx       → Surprise page
    globals.css            → theme variables, glassmorphism utilities
  components/
    layout/               → Navbar, Footer, Loader, CustomCursor, SmoothScrollProvider
    effects/               → Particles, FloatingBalloons, FloatingStars, Sparkles,
                              Fireworks, AnimatedBackground, AnimatedMoon, LottieBalloons
    birthday/               → BirthdayCake, GiftBox
    gallery/                 → GalleryGrid, GalleryCard, Slideshow
    ui/                       → Countdown, TypingText, QuoteCard, Timeline, MusicPlayer
  hooks/                       → useConfetti, useSound, useMousePosition
  lib/
    constants.ts                → ALL editable site content lives here
    utils.ts                     → helper functions
  types/                          → shared TypeScript types
public/
  images/                          → hero.jpg + photo1.jpg…photo20.jpg (placeholders)
  music/                            → birthday.mp3 (placeholder)
  lottie/                            → balloons.json (Lottie animation)
```

---

## 3. Customization

### Changing the celebrant's name, tagline, and dates

Open **`src/lib/constants.ts`** and edit `SITE_CONFIG`:

```ts
export const SITE_CONFIG = {
  celebrantName: "Ananya",
  siteTitle: "Happy Birthday, Ananya ✨",
  birthdayDateISO: "2026-08-15T00:00:00", // countdown target
  heroTagline: "One More Year of Magic",
  heroSubtitle: "A little celebration built just for you...",
  musicSrc: "/music/birthday.mp3",
};
```

- If `birthdayDateISO` is in the **future**, the Home page shows a live countdown.
- If it's in the **past**, the countdown automatically switches to a "celebration is live" message.

### Changing the birthday wishes text

Still in `src/lib/constants.ts`, edit the `WISHES` array — each string becomes
its own animated, typewriter-effect card on the Wishes page.

### Changing quotes / timeline

Edit the `QUOTES` and `TIMELINE` arrays in the same file.

### Changing the ending message (Surprise page)

Edit `ENDING_MESSAGE` in `src/lib/constants.ts`.

---

## 4. Changing Images

All gallery images are referenced from **`public/images/`** and listed in
`GALLERY_PHOTOS` inside `src/lib/constants.ts`.

1. Replace the placeholder files in `public/images/` (`hero.jpg`, `photo1.jpg`
   through `photo20.jpg`) with your own photos, **keeping the same filenames**
   — or update the `src` and `caption` fields in `GALLERY_PHOTOS` to point to
   new filenames.
2. To add or remove photos, edit the `GALLERY_PHOTOS` array — you can change
   the array length, filenames, and captions freely.
3. The Home page hero background references `/images/hero.jpg` directly inside
   `AnimatedBackground` usage — replace that file to change the hero art.

Recommended: use compressed `.jpg` or `.webp` files under ~500KB each for best
performance.

---

## 5. Changing Music

Replace **`public/music/birthday.mp3`** with your own audio file (keep the
same filename), or change the path in `SITE_CONFIG.musicSrc` inside
`src/lib/constants.ts` to point to a new file placed in `public/music/`.

The floating music player button (bottom-right on every page) and the Wishes
page gift-opening moment both use this same track.

> Browsers block audio autoplay until the user interacts with the page — this
> is expected behavior, not a bug. Music starts on the first click (e.g. the
> music player button, or opening the gift on the Wishes page).

---

## 6. Changing the Birthday Text / Ending Message

- Hero heading & subtitle → `SITE_CONFIG.heroTagline` / `heroSubtitle`
- "Happy Birthday" reveal on the Wishes page → edit directly inside
  `src/app/wishes/page.tsx` (the `message` block)
- Surprise page ending message → `ENDING_MESSAGE` in `src/lib/constants.ts`

---

## 7. Deployment

The site is a standard Next.js App Router project and deploys cleanly to:

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Set build command to `next build` and publish directory to `.next`
(use the official Next.js Netlify plugin).

### Self-hosted / Node server
```bash
npm run build
npm run start
```

No environment variables are required — everything is static/editable via
`src/lib/constants.ts` and the `public/` folder.

---

## 8. Notes

- All decorative "random" placements (balloons, particles, stars) use a
  seeded pseudo-random function (`seededRandom` in `src/lib/utils.ts`) so
  server and client render identically and avoid React hydration warnings.
- Reduced-motion users automatically get animations shortened/disabled via
  `prefers-reduced-motion` in `globals.css` and the smooth-scroll provider.
- The custom cursor and Lenis smooth scroll are automatically skipped on
  touch/coarse-pointer devices.

Enjoy the celebration! 🎂🎈✨
