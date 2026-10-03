"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

const MIN = 150;
const MAX = 950;

/**
 * Animated credit-score gauge. Values are an illustrative example of progress,
 * not real data; the card says so explicitly.
 */
export function ScoreGauge({ from = 380, to = 760, className }: { from?: number; to?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(from);
  const [display, setDisplay] = useState(from);
  const progress = useTransform(value, [MIN, MAX], [0, 1]);
  const color = useTransform(value, [from, (from + to) / 2, to], ["#E0574B", "#E4B53A", "#14B8A6"]);

  useEffect(() => {
    if (!inView) return;
    const c = animate(value, to, { duration: 2.6, delay: 0.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, value]);

  const label = display < 500 ? "En recuperación" : display < 680 ? "Mejorando" : "Saludable";

  return (
    <div ref={ref} className={cn("rounded-[28px] bg-white p-6 text-navy shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] md:p-7", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-haze">Tu historial crediticio</span>
        <span className="rounded-full bg-sky px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue">Ejemplo</span>
      </div>
      <div className="relative mx-auto mt-4 w-full max-w-[300px]">
        <svg viewBox="0 0 300 170" className="w-full" aria-hidden>
          <path d="M30 150 A120 120 0 0 1 270 150" fill="none" stroke="#E8F0FC" strokeWidth="22" strokeLinecap="round" />
          <motion.path
            d="M30 150 A120 120 0 0 1 270 150"
            fill="none"
            strokeWidth="22"
            strokeLinecap="round"
            style={{ pathLength: progress, stroke: color }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="font-display text-5xl font-extrabold tabular-nums tracking-tight">{display}</span>
          <span className="text-sm font-semibold text-slate">{label}</span>
        </div>
      </div>
      <div className="mt-3 flex justify-between text-xs font-medium text-haze">
        <span>Reportado</span>
        <span>Recuperado</span>
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-mint-soft px-4 py-3 text-sm font-semibold text-[#0B6E62]">
        <TrendingUp className="h-4 w-4 shrink-0" />
        Con asesoría, tu puntaje puede volver a crecer.
      </div>
    </div>
  );
}
