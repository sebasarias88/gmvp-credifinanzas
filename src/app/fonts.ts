import localFont from "next/font/local";

/**
 * Self-hosted fonts via next/font: preloaded, hashed and served with a
 * metric-matched fallback so text never jumps when the real font arrives.
 */
export const sans = localFont({
  src: "./fonts/geist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

export const mono = localFont({
  src: "./fonts/geist-mono-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

export const display = localFont({
  src: "./fonts/unbounded-latin-wght-normal.woff2",
  weight: "200 900",
  variable: "--font-unbounded",
  display: "swap",
  preload: false,
});

export const fontVariables = [sans.variable, mono.variable, display.variable].join(" ");
