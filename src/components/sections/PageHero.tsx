"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SplitHeading } from "@/components/core/SplitHeading";

type Line = string | { text: string; className?: string };

/** Inner-page hero: aurora glow, grid texture and an optional photo in a glass frame. */
export function PageHero({ label, lines, intro, image }: { label: string; lines: Line[]; intro?: string; image?: StaticImageData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-electric opacity-35 blur-[130px]" />
      <div aria-hidden className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan opacity-10 blur-[110px]" />
      <div className="relative mx-auto grid max-w-[1360px] items-end gap-12 px-6 md:px-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div style={{ y: textY }}>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-lime">
            {label}
          </motion.span>
          <SplitHeading
            as="h1"
            immediate
            lines={lines}
            className="mt-8 max-w-4xl text-[12vw] font-semibold leading-[0.95] tracking-[-0.055em] text-snow md:text-7xl lg:text-[5.4rem]"
          />
          {intro && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-fog md:text-xl">
              {intro}
            </motion.p>
          )}
        </motion.div>
        {image && (
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="ring-gradient relative hidden aspect-[4/5] overflow-hidden rounded-[32px] lg:block"
          >
            <Image src={image} alt="" fill priority placeholder="blur" sizes="40vw" className="img-cool object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
