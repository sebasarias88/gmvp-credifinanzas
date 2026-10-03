"use client";

import { useEffect } from "react";
import { markIntroDone } from "@/lib/intro";

/** Sites without a preloader mark the intro as done right after hydration. */
export function IntroSignal() {
  useEffect(() => {
    const id = requestAnimationFrame(() => markIntroDone());
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}
