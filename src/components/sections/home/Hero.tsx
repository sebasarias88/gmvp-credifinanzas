"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { hero, site } from "@/content/site";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Magnetic } from "@/components/core/Magnetic";
import { Marquee } from "@/components/core/Marquee";
import { ScoreGauge } from "../ScoreGauge";

const chips = ["CIFIN · TransUnion", "DataCrédito · Experian", "Ley de Habeas Data"];
const ticker = ["Asesoría financiera", "Crédito rotativo", "Compra de cartera", "Seguros de vida", "Seguro de deudores", "SOAT", "Mejora tu puntaje"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="theme-dark relative overflow-hidden bg-navy pt-32 md:pt-40">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div style={{ y: blobY }} aria-hidden className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-blue opacity-50 blur-[120px]" />
      <motion.div style={{ y: blobY }} aria-hidden className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-mint opacity-25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-6 pb-24 md:px-10 lg:grid-cols-[1.25fr_1fr] lg:pb-32">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80"
          >
            <ShieldCheck className="h-4 w-4 text-gold" /> {hero.badge}
          </motion.span>
          <SplitHeading
            as="h1"
            immediate
            lines={[...hero.title, { text: hero.accent, className: "text-gold" }]}
            className="mt-8 font-display text-[12.5vw] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem] xl:text-[5rem]"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {hero.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Magnetic>
              <Link href="#diagnostico" className="group inline-flex items-center gap-2 rounded-2xl bg-gold px-7 py-4 font-bold text-navy transition-transform hover:scale-[1.03]">
                Haz tu diagnóstico gratis <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-semibold text-white transition-colors hover:bg-white/15"
            >
              Chatea con un asesor
            </a>
          </motion.div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/70"
              >
                {c}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div style={{ y: cardY }} className="relative mx-auto w-full max-w-[400px]">
          <motion.div initial={{ opacity: 0, y: 40, rotate: 3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <ScoreGauge />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="glass animate-float absolute -left-12 -top-10 z-10 hidden rounded-2xl px-4 py-3 text-sm text-white sm:block"
          >
            <span className="block text-xs text-white/60">Desde</span>
            <span className="font-display text-xl font-bold">2015</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="glass animate-float absolute -bottom-8 -right-8 z-10 hidden rounded-2xl px-4 py-3 text-sm text-white [animation-delay:1.5s] sm:block"
          >
            <span className="block text-xs text-white/60">Asesores + abogados</span>
            <span className="font-display text-xl font-bold">Habeas Data</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <Marquee speed={35}>
          {ticker.map((t) => (
            <span key={t} className="mx-8 inline-flex items-center gap-8 font-display text-lg font-semibold text-white/70">
              {t}
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
