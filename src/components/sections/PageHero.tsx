"use client";

import { motion } from "motion/react";
import { SplitHeading } from "@/components/core/SplitHeading";

type Line = string | { text: string; className?: string };

/** Dark hero for inner pages, with grid texture and glowing blob. */
export function PageHero({ label, lines, intro }: { label: string; lines: Line[]; intro?: string }) {
  return (
    <section className="theme-dark relative overflow-hidden bg-navy pb-20 pt-40 md:pb-28 md:pt-48">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue opacity-50 blur-[120px]" />
      <div className="relative mx-auto max-w-[1320px] px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white/80"
        >
          {label}
        </motion.span>
        <SplitHeading
          as="h1"
          immediate
          lines={lines}
          className="mt-8 max-w-5xl font-display text-[12vw] font-extrabold leading-[0.98] tracking-[-0.045em] text-white md:text-7xl lg:text-8xl"
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
