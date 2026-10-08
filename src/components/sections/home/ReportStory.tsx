"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { story } from "@/content/site";
import { advisoryMeeting } from "@/assets/images";

const rows = [
  { label: "Obligación financiera", bad: "Mora 90+ días", good: "Al día" },
  { label: "Telecomunicaciones", bad: "Reportado", good: "Paz y salvo" },
  { label: "Crédito de consumo", bad: "Mora 60 días", good: "Normalizado" },
  { label: "Historial de pagos", bad: "Irregular", good: "Constante" },
  { label: "Acceso a crédito", bad: "Negado", good: "Disponible" },
];

/**
 * Scroll-driven story: the section pins (desktop) while a credit report flips
 * row by row from red to lime, a progress bar fills and the photo opens up.
 * Illustrative only.
 */
export function ReportStory() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ desktop: "(min-width: 1024px)", reduce: "(prefers-reduced-motion: reduce)" }, (ctx) => {
        const { desktop, reduce } = ctx.conditions as { desktop: boolean; reduce: boolean };
        if (reduce) {
          gsap.set("[data-bad]", { yPercent: -100 });
          gsap.set("[data-good]", { yPercent: 0 });
          return;
        }
        const tl = gsap.timeline({
          scrollTrigger: desktop
            ? { trigger: section.current, start: "top top", end: "+=1800", pin: true, scrub: 1 }
            : { trigger: "[data-report]", start: "top 75%", end: "bottom 40%", scrub: 1 },
        });
        tl.fromTo("[data-photo]", { clipPath: "inset(30% 30% 30% 30% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.5 }, 0);
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row, i) => {
          const at = 0.6 + i;
          tl.to(row.querySelector("[data-bad]"), { yPercent: -100, duration: 1 }, at)
            .fromTo(row.querySelector("[data-good]"), { yPercent: 100 }, { yPercent: 0, duration: 1 }, at)
            .to(row.querySelector("[data-dot]"), { backgroundColor: "#C8FF4D", boxShadow: "0 0 12px #C8FF4D", duration: 1 }, at)
            .to(row, { borderColor: "rgba(200,255,77,0.25)", duration: 1 }, at);
        });
        tl.fromTo("[data-bar]", { scaleX: 0.06 }, { scaleX: 1, ease: "none", duration: rows.length }, 0.6);
        tl.fromTo("[data-status-good]", { opacity: 0 }, { opacity: 1, duration: 0.5 }, rows.length + 0.1);
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative flex min-h-[100svh] items-center overflow-hidden py-24">
      <div aria-hidden className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-electric opacity-[0.12] blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-[1360px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] [&>*]:min-w-0">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-lime">
            Desde {story.year}
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-snow md:text-6xl">{story.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">{story.text}</p>
          <div data-photo className="relative mt-10 hidden h-56 overflow-hidden rounded-[28px] lg:block">
            <Image src={advisoryMeeting} alt="Asesor financiero revisando un caso con una clienta" fill sizes="40vw" className="img-cool object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-void/70 to-transparent" />
            <span className="glass absolute bottom-4 left-4 rounded-full px-4 py-2 text-xs font-medium text-snow">Asesores financieros + abogados</span>
          </div>
        </div>

        <div data-report className="glass ring-gradient rounded-[32px] p-5 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Reporte crediticio</p>
              <p className="mt-1 text-xl font-semibold tracking-tight text-snow">Tu historia, paso a paso</p>
            </div>
            <span className="relative rounded-full border border-coral/30 bg-coral/10 px-3 py-1.5 font-mono text-xs font-semibold text-coral">
              <span data-status-good className="absolute inset-0 grid place-items-center rounded-full bg-lime text-void opacity-0">Al día</span>
              En riesgo
            </span>
          </div>
          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div data-bar className="h-full origin-left rounded-full bg-gradient-to-r from-coral via-amber to-lime" />
          </div>
          <ul className="mt-6 space-y-2.5">
            {rows.map((r) => (
              <li key={r.label} data-row className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 md:px-5">
                <span className="flex items-center gap-3">
                  <span data-dot className="h-2.5 w-2.5 rounded-full bg-coral shadow-[0_0_12px_#FF5A5F]" aria-hidden />
                  <span className="font-medium text-snow">{r.label}</span>
                </span>
                <span className="relative h-7 w-32 overflow-hidden text-right font-mono text-sm font-semibold">
                  <span data-bad className="absolute inset-0 flex items-center justify-end text-coral">{r.bad}</span>
                  <span data-good className="absolute inset-0 flex items-center justify-end text-lime" style={{ transform: "translateY(100%)" }}>{r.good}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-steel">Ejemplo ilustrativo del proceso de eliminación de reportes negativos.</p>
        </div>
      </div>
    </section>
  );
}
