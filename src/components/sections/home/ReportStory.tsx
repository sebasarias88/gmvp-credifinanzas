"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { story } from "@/content/site";

const rows = [
  { label: "Obligación financiera", bad: "Mora 90+ días", good: "Al día" },
  { label: "Telecomunicaciones", bad: "Reportado", good: "Paz y salvo" },
  { label: "Crédito de consumo", bad: "Mora 60 días", good: "Normalizado" },
  { label: "Historial de pagos", bad: "Irregular", good: "Constante" },
  { label: "Acceso a crédito", bad: "Negado", good: "Disponible" },
];

/**
 * Scroll-driven story: a credit report whose rows flip from red to green
 * while the section is pinned (desktop). Illustrative only.
 */
export function ReportStory() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 1024px)", reduce: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          const { desktop, reduce } = ctx.conditions as { desktop: boolean; reduce: boolean };
          if (reduce) {
            gsap.set("[data-bad]", { yPercent: -100 });
            gsap.set("[data-good]", { yPercent: 0 });
            return;
          }
          const tl = gsap.timeline({
            scrollTrigger: desktop
              ? { trigger: section.current, start: "top top", end: "+=1600", pin: true, scrub: 1 }
              : { trigger: "[data-report]", start: "top 75%", end: "bottom 40%", scrub: 1 },
          });
          gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row, i) => {
            tl.to(row.querySelector("[data-bad]"), { yPercent: -100, duration: 1 }, i)
              .fromTo(row.querySelector("[data-good]"), { yPercent: 100 }, { yPercent: 0, duration: 1 }, i)
              .to(row.querySelector("[data-dot]"), { backgroundColor: "#14B8A6", duration: 1 }, i);
          });
          tl.fromTo("[data-bar]", { scaleX: 0.08 }, { scaleX: 1, ease: "none", duration: rows.length }, 0);
          tl.fromTo("[data-status-good]", { opacity: 0 }, { opacity: 1, duration: 0.5 }, rows.length - 0.5);
        },
      );
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative flex min-h-[100svh] items-center overflow-hidden bg-white py-24">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 text-sm font-bold text-blue">
            Desde {story.year}
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-navy md:text-6xl">
            {story.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">{story.text}</p>
          <p className="mt-6 text-sm font-semibold text-haze lg:block">Desplázate para ver cómo cambia un historial →</p>
        </div>

        <div data-report className="rounded-[32px] border border-line bg-mist p-5 shadow-[0_40px_80px_-40px_rgba(10,26,63,0.35)] md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-haze">Reporte crediticio</p>
              <p className="mt-1 font-display text-xl font-bold text-navy">Tu historia, paso a paso</p>
            </div>
            <span className="relative rounded-full bg-coral/10 px-3 py-1.5 text-xs font-bold text-coral">
              <span data-status-good className="absolute inset-0 grid place-items-center rounded-full bg-mint text-white opacity-0">Al día</span>
              En riesgo
            </span>
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-line">
            <div data-bar className="h-full origin-left rounded-full bg-gradient-to-r from-coral via-gold to-mint" />
          </div>
          <ul className="mt-6 space-y-3">
            {rows.map((r) => (
              <li key={r.label} data-row className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 md:px-5">
                <span className="flex items-center gap-3">
                  <span data-dot className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden />
                  <span className="font-semibold text-navy">{r.label}</span>
                </span>
                <span className="relative h-7 w-32 overflow-hidden text-right text-sm font-bold">
                  <span data-bad className="absolute inset-0 flex items-center justify-end text-coral">{r.bad}</span>
                  <span data-good className="absolute inset-0 flex items-center justify-end text-mint" style={{ transform: "translateY(100%)" }}>{r.good}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-haze">Ejemplo ilustrativo. Los resultados dependen de cada caso y de la ley vigente.</p>
        </div>
      </div>
    </section>
  );
}
