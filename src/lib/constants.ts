// ─────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Edit everything in this file to customize the celebration.
// ─────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  celebrantName: "VENNILA",
  siteTitle: "Happy Birthday, Vennila ✨",
  siteDescription: "A premium interactive birthday celebration.",

  // Countdown target — set to a future ISO date to show a countdown,
  // or a past date to show the celebration as already live.
  birthdayDateISO: "2026-08-12T00:00:00",

  heroTagline: "One More Year of Magic",
  heroSubtitle:
    "A little celebration built just for you — scroll, click, and let the confetti fly.",

  musicSrc: "/music/birthday.mp3",
} as const;

export const WISHES: string[] = [
  "Un life fulla happiness, health, success, and lots of beautiful surprises irukkanum 💖",
  "Indha birthday un life la best memories create panna oru beautiful beginning-a irukkanum. 🎊",
  "Smile pannitu celebrate pannu! Today is your day, and you deserve all the happiness in the world. ✨",
  "Cake sapdu, photos edu, memories create pannu... indha day unakku semma special! 🎂",
"Oru Nila vaanathula... innoru Nila indha special day celebrate panraanga. 🌙🎂",];

export const QUOTES = [
  {
    quote:
      "నీ జీవితంలో ఎంతమంది వచ్చినా... ఎక్కడో ఒక చోట, నిన్ను నిశ్శబ్దంగా అభిమానించే ఒక మనసు ఎప్పుడూ ఉంటుంది. 🤍",
  },
  {
    quote:
      "ఈరోజు నీ పుట్టినరోజు... అందరూ నీకు ఆనందం కోరుకుంటారు. నేను మాత్రం... నీ ఆనందంలో ఎప్పుడో ఒకరోజు నాకూ చిన్న చోటు దొరకాలని కోరుకుంటాను. ✨",
  },
  {
    quote:
      "ప్రతి ఒక్కరినీ చూడొచ్చు... కానీ ప్రతి ఒక్కరిని మనసుతో చూడలేం. నిన్ను చూసిన రోజు నుంచి నా మనసు ఇంకెవరినీ చూడలేదు. ❤️",
  },
];
export const TIMELINE = [
  { year: "The Beginning", label: "A story worth celebrating started here." },
  { year: "Along the Way", label: "Countless moments, memories, and milestones." },
  { year: "Today", label: "Another beautiful chapter begins." },
  { year: "Ahead", label: "A future as bright as the celebration tonight." },
];

export type GalleryPhoto = {
  id: number;
  src: string;
  caption: string;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = Array.from({ length: 20 }, (_, i) => {
  const id = i + 1;
 const captions = [
  "Somehow, you make every moment look beautiful",
  "My favorite view, without even trying",
  "That smile has been on my mind lately",
  "How do you make cute look this effortless?",
  "Caught being effortlessly adorable",
  "A little moment, a very big crush",
  "If pretty had a favorite picture",
  "The reason this photo deserves a second look",
  "You really have no idea how beautiful you are",
  "Just another reason to smile",
  "I could look at this one forever",
  "Some pictures hit a little differently",
  "Okay, but how are you this cute?",
  "A picture worth getting a little distracted by",
  "My camera roll's favorite person",
  "If I had a favorite photo, it might be this one",
  "You make ordinary moments feel special",
  "Not saying I'm obsessed... but this is cute",
  "Maybe my favorite person deserves a gallery",
  "And somehow, you keep stealing my attention",
];


  return {
    id,
    src: `/images/photo${id}.jpg`,
    caption: captions[i],
  };
});

export const ENDING_MESSAGE =
  "May this year bring you happiness, success, laughter and unforgettable memories.";
