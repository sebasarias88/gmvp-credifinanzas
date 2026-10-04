"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Award, Gauge, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { steps, policies, about, education } from "@/content/site";
import { RevealGroup, RevealItem, Reveal } from "@/components/core/Reveal";
import { SplitHeading } from "@/components/core/SplitHeading";
import { cn } from "@/lib/cn";

type Line = string | { text: string; className?: string };

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={12}>
      <p className={cn("mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_#C8FF4D]" aria-hidden />
        {children}
      </p>
    </Reveal>
  );
}

export function SectionTitle({ lines, className }: { lines: Line[]; className?: string }) {
  return <SplitHeading lines={lines} className={cn("text-4xl font-semibold leading-[1] tracking-[-0.05em] text-snow md:text-6xl", className)} />;
}

/** Three steps on a glowing rail that fills with scroll. */
export function Steps() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <ol ref={ref} className="relative grid gap-5 md:grid-cols-3">
      <div aria-hidden className="absolute left-10 right-10 top-10 hidden h-px bg-white/10 md:block" />
      <motion.div aria-hidden style={{ scaleX }} className="absolute left-10 right-10 top-10 hidden h-px origin-left bg-gradient-to-r from-electric via-cyan to-lime shadow-[0_0_14px_#22D3EE] md:block" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <Reveal delay={i * 0.12}>
            <span className="glass relative z-10 grid h-20 w-20 place-items-center rounded-3xl font-display text-2xl font-semibold text-lime">
              0{i + 1}
            </span>
            <div className="mt-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-snow">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-fog">{s.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

const valueIcons = [Users, HeartHandshake, Award, Lightbulb, ShieldCheck, Gauge];

export function ValuesGrid() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {about.values.map((v, i) => {
        const Icon = valueIcons[i % valueIcons.length];
        return (
          <RevealItem
            key={v.title}
            className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-panel p-8 transition-colors duration-500 hover:border-lime/30"
          >
            <span aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.05] text-lime">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="relative mt-8 text-2xl font-semibold tracking-tight text-snow">{v.title}</h3>
            <p className="relative mt-3 leading-relaxed text-fog">{v.text}</p>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

/** 30 / 60 / 90 collection policy as glowing timeline cards. */
export function CollectionTimeline() {
  const colors = [
    { bar: "bg-lime shadow-[0_0_18px_#C8FF4D]", text: "text-lime" },
    { bar: "bg-amber shadow-[0_0_18px_#FFB547]", text: "text-amber" },
    { bar: "bg-coral shadow-[0_0_18px_#FF5A5F]", text: "text-coral" },
  ];
  return (
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {policies.collection.map((p, i) => (
        <RevealItem key={p.days} className="glass relative overflow-hidden rounded-[28px] p-8">
          <span className={cn("absolute inset-x-8 top-0 h-[3px] rounded-b-full", colors[i].bar)} />
          <p className={cn("font-display text-7xl font-semibold tracking-tight", colors[i].text)}>{p.days}</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">días calendario</p>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-snow">{p.title}</h3>
          <p className="mt-2 leading-relaxed text-fog">{p.text}</p>
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
          <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-panel p-8 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40">
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-electric to-lime transition-transform duration-700 group-hover:scale-x-100" />
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-electric/15 px-3 py-1 font-mono text-[11px] font-semibold text-electric-soft">{e.tag}</span>
              <span className="font-mono text-xs text-steel">TIP {String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-tight text-snow">{e.title}</h3>
            <p className="mt-3 leading-relaxed text-fog">{e.text}</p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
