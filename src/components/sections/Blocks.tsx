"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { steps, policies, about, education } from "@/content/site";
import { RevealGroup, RevealItem, Reveal } from "@/components/core/Reveal";
import { SplitHeading } from "@/components/core/SplitHeading";
import { cn } from "@/lib/cn";

type Line = string | { text: string; className?: string };

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={12}>
      <p className={cn("mb-5 inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 text-sm font-bold text-blue", className)}>{children}</p>
    </Reveal>
  );
}

export function SectionTitle({ lines, className }: { lines: Line[]; className?: string }) {
  return (
    <SplitHeading
      lines={lines}
      className={cn("font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-navy md:text-6xl", className)}
    />
  );
}

/** Three steps joined by a line that draws itself as you scroll. */
export function Steps() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <ol ref={ref} className="relative grid gap-6 md:grid-cols-3">
      <div aria-hidden className="absolute left-8 right-8 top-8 hidden h-0.5 bg-line md:block" />
      <motion.div aria-hidden style={{ scaleX }} className="absolute left-8 right-8 top-8 hidden h-0.5 origin-left bg-blue md:block" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <Reveal delay={i * 0.12}>
            <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-navy font-display text-2xl font-extrabold text-gold shadow-lg">
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-navy">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-slate">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function ValuesGrid() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {about.values.map((v, i) => (
        <RevealItem key={v.title} className="group rounded-[28px] border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_30px_60px_-30px_rgba(11,95,194,0.4)]">
          <span className="font-display text-sm font-bold text-blue">0{i + 1}</span>
          <h3 className="mt-6 font-display text-2xl font-bold text-navy">{v.title}</h3>
          <p className="mt-3 leading-relaxed text-slate">{v.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/** 30 / 60 / 90 collection policy as a horizontal timeline. */
export function CollectionTimeline() {
  const colors = ["bg-mint", "bg-gold", "bg-coral"];
  return (
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {policies.collection.map((p, i) => (
        <RevealItem key={p.days} className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/5 p-8">
          <span className={cn("absolute inset-x-0 top-0 h-1.5", colors[i])} />
          <p className="font-display text-7xl font-extrabold tracking-tight text-white">{p.days}</p>
          <p className="text-sm font-semibold text-[var(--muted)]">días calendario</p>
          <h3 className="mt-6 font-display text-2xl font-bold text-white">{p.title}</h3>
          <p className="mt-2 leading-relaxed text-[var(--muted)]">{p.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function EducationCards({ limit }: { limit?: number }) {
  const items = limit ? education.slice(0, limit) : education;
  return (
    <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((e, i) => (
        <RevealItem key={e.title}>
          <article className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,26,63,0.35)]">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-sky px-3 py-1 text-xs font-bold text-blue">{e.tag}</span>
              <span className="font-display text-sm font-bold text-haze">Tip {String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-navy">{e.title}</h3>
            <p className="mt-3 leading-relaxed text-slate">{e.text}</p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
