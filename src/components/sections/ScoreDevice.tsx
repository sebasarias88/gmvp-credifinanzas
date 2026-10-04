"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import { BadgeCheck, CreditCard, FileCheck2, RotateCcw, TrendingUp } from "lucide-react";
import { TiltCard } from "@/components/core/TiltCard";
import { cn } from "@/lib/cn";

/* ---------- Illustrative data (not a real person's score) ---------- */
const MIN = 150;
const MAX = 950;
const FROM = 380;
const TO = 781;
const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const SERIES = [380, 371, 396, 428, 452, 470, 521, 574, 612, 664, 729, 781];

/* ---------- Gauge geometry ---------- */
const SEGMENTS = 56;
const CX = 160;
const CY = 160;
const START = 135; // degrees, clockwise from +x (SVG)
const SWEEP = 270;
const toRad = (d: number) => (d * Math.PI) / 180;

function mix(a: string, b: string, t: number) {
  const pa = a.match(/\w\w/g)!.map((h) => parseInt(h, 16));
  const pb = b.match(/\w\w/g)!.map((h) => parseInt(h, 16));
  return `rgb(${pa.map((v, i) => Math.round(v + (pb[i] - v) * t)).join(",")})`;
}
const segColor = (t: number) => (t < 0.5 ? mix("FF5A5F", "FFB547", t / 0.5) : mix("FFB547", "C8FF4D", (t - 0.5) / 0.5));

const segments = Array.from({ length: SEGMENTS }, (_, i) => {
  const a = toRad(START + (i / (SEGMENTS - 1)) * SWEEP);
  const r1 = 116;
  const r2 = i % 7 === 0 ? 142 : 136;
  return {
    x1: CX + Math.cos(a) * r1,
    y1: CY + Math.sin(a) * r1,
    x2: CX + Math.cos(a) * r2,
    y2: CY + Math.sin(a) * r2,
    color: segColor(i / (SEGMENTS - 1)),
    major: i % 7 === 0,
  };
});

/* ---------- Chart geometry ---------- */
const CW = 440;
const CH = 120;
function buildPath(values: number[]) {
  const lo = 340;
  const hi = 800;
  const pts = values.map((v, i) => [10 + (i / (values.length - 1)) * (CW - 20), CH - 8 - ((v - lo) / (hi - lo)) * (CH - 20)] as const);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
  }
  return { d, area: `${d} L ${pts[pts.length - 1][0]} ${CH} L ${pts[0][0]} ${CH} Z` };
}

const toasts = [
  { at: 0.18, icon: FileCheck2, title: "Reporte revisado", text: "CIFIN y DataCrédito analizados", side: "left" as const },
  { at: 0.55, icon: BadgeCheck, title: "Acuerdo de pago al día", text: "Tu hábito de pago mejora", side: "right" as const },
  { at: 0.9, icon: CreditCard, title: "Cupo rotativo disponible", text: "Vuelves al sistema financiero", side: "left" as const },
];

/**
 * Hero centerpiece: an illustrative credit-score "device". A segmented radial
 * gauge lights up from red to lime while the score counts up, a 12-month chart
 * draws itself with a glowing cursor and milestone notifications pop around it.
 */
export function ScoreDevice({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const p = useMotionValue(0);
  const [lit, setLit] = useState(0);
  const [score, setScore] = useState(FROM);
  const [dot, setDot] = useState({ x: 10, y: CH - 8 });
  const [run, setRun] = useState(0);
  const { d, area } = useMemo(() => buildPath(SERIES), []);
  const clipW = useTransform(p, (v) => v * CW);

  useEffect(() => {
    if (!inView) return;
    p.set(0);
    const c = animate(p, 1, { duration: 4.6, delay: 0.5, ease: [0.45, 0, 0.15, 1] });
    return () => c.stop();
  }, [inView, run, p]);

  useMotionValueEvent(p, "change", (v) => {
    setScore(Math.round(FROM + (TO - FROM) * v));
    const target = (FROM + (TO - FROM) * v - MIN) / (MAX - MIN);
    setLit(Math.round(target * SEGMENTS));
    const path = pathRef.current;
    if (path) {
      const pt = path.getPointAtLength(path.getTotalLength() * v);
      setDot({ x: pt.x, y: pt.y });
    }
  });

  const progress = (score - FROM) / (TO - FROM);
  const status = score < 520 ? { label: "En riesgo", cls: "text-coral bg-coral/10 border-coral/30" } : score < 680 ? { label: "Recuperando", cls: "text-amber bg-amber/10 border-amber/30" } : { label: "Saludable", cls: "text-lime bg-lime/10 border-lime/30" };
  const tipColor = segColor(Math.min(1, Math.max(0, (score - MIN) / (MAX - MIN))));

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Glow behind */}
      <div aria-hidden className="absolute -inset-10 rounded-full opacity-60 blur-3xl" style={{ background: `radial-gradient(circle at 50% 40%, ${tipColor}33, transparent 60%)` }} />

      <TiltCard max={6} className="rounded-[34px]">
        <div className="glass ring-gradient relative overflow-hidden rounded-[34px] p-5 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] md:p-7">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
            <span className="animate-beam absolute h-px w-1/3 bg-gradient-to-r from-transparent via-lime to-transparent" />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan font-mono text-xs font-bold text-white">TÚ</span>
              <div>
                <p className="text-sm font-semibold text-snow">Historial crediticio</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel">Ejemplo ilustrativo · 12 meses</p>
              </div>
            </div>
            <span className={cn("rounded-full border px-3 py-1 font-mono text-[11px] font-semibold transition-colors duration-500", status.cls)}>{status.label}</span>
          </div>

          {/* Gauge */}
          <div className="relative mx-auto mt-2 w-full max-w-[340px]">
            <svg viewBox="0 0 320 300" className="w-full" aria-hidden>
              <defs>
                <filter id="seg-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {segments.map((s, i) => (
                <line
                  key={i}
                  x1={s.x1}
                  y1={s.y1}
                  x2={s.x2}
                  y2={s.y2}
                  strokeWidth={s.major ? 4 : 3}
                  strokeLinecap="round"
                  stroke={i < lit ? s.color : "rgba(255,255,255,0.09)"}
                  filter={i < lit ? "url(#seg-glow)" : undefined}
                  style={{ transition: "stroke 0.25s" }}
                />
              ))}
              <circle cx={CX} cy={CY} r="96" fill="none" stroke="rgba(255,255,255,0.05)" />
              <circle cx={CX} cy={CY} r="96" fill="none" stroke={tipColor} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 7" className="spin-slow" />
              <text x="44" y="276" className="fill-steel font-mono text-[11px]">{MIN}</text>
              <text x="250" y="276" className="fill-steel font-mono text-[11px]">{MAX}</text>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel">Puntaje</span>
              <span className="font-display text-6xl font-semibold tabular-nums tracking-tight text-snow md:text-7xl" style={{ textShadow: `0 0 40px ${tipColor}66` }}>
                {score}
              </span>
              <AnimatePresence>
                {progress > 0.98 && (
                  <motion.span
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-2 inline-flex items-center gap-1 rounded-full bg-lime px-3 py-1 font-mono text-xs font-bold text-void"
                  >
                    <TrendingUp className="h-3.5 w-3.5" /> +{TO - FROM} pts
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-1 rounded-2xl border border-white/[0.06] bg-black/20 p-3 md:p-4">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
              <span>Evolución</span>
              <span className="text-lime">● En vivo</span>
            </div>
            <svg viewBox={`0 0 ${CW} ${CH + 18}`} className="w-full" aria-hidden>
              <defs>
                <linearGradient id="chart-stroke" x1="0" x2="1">
                  <stop offset="0%" stopColor="#FF5A5F" />
                  <stop offset="50%" stopColor="#3B6CFF" />
                  <stop offset="100%" stopColor="#C8FF4D" />
                </linearGradient>
                <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3B6CFF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3B6CFF" stopOpacity="0" />
                </linearGradient>
                <clipPath id="chart-clip">
                  <motion.rect x="0" y="0" height={CH} style={{ width: clipW }} />
                </clipPath>
              </defs>
              {[0.25, 0.5, 0.75].map((g) => (
                <line key={g} x1="0" x2={CW} y1={CH * g} y2={CH * g} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 5" />
              ))}
              <path d={area} fill="url(#chart-fill)" clipPath="url(#chart-clip)" />
              <motion.path ref={pathRef} d={d} fill="none" stroke="url(#chart-stroke)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: p }} />
              <circle cx={dot.x} cy={dot.y} r="10" fill={tipColor} opacity="0.25" />
              <circle cx={dot.x} cy={dot.y} r="5" fill={tipColor} stroke="#04060b" strokeWidth="2" />
              {MONTHS.map((m, i) => (
                <text key={m} x={10 + (i / 11) * (CW - 20)} y={CH + 14} textAnchor="middle" className="fill-steel font-mono text-[9px]">
                  {m}
                </text>
              ))}
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-steel">Con asesoría, tu puntaje puede volver a crecer.</p>
            <button
              type="button"
              onClick={() => setRun((r) => r + 1)}
              aria-label="Repetir animación"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-fog transition-colors hover:border-lime hover:text-lime"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </TiltCard>

      {/* Milestone notifications */}
      <div aria-hidden className="pointer-events-none">
        <AnimatePresence>
          {toasts.map((t, i) =>
            progress >= t.at ? (
              <motion.div
                key={`${t.title}-${run}`}
                initial={{ opacity: 0, x: t.side === "left" ? -30 : 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "absolute z-20 hidden w-60 items-center gap-3 rounded-2xl border border-white/10 bg-panel/95 p-3 shadow-2xl backdrop-blur-xl xl:flex",
                  t.side === "left" ? "-left-36" : "-right-28",
                  i === 0 && "top-24",
                  i === 1 && "top-[46%]",
                  i === 2 && "bottom-20",
                )}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime">
                  <t.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-snow">{t.title}</span>
                  <span className="block text-xs text-fog">{t.text}</span>
                </span>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
