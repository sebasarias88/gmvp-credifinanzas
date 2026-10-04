"use client";

import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { hero, site } from "@/content/site";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Magnetic } from "@/components/core/Magnetic";
import { Marquee } from "@/components/core/Marquee";
import { ScoreDevice } from "../ScoreDevice";

const ticker = ["Asesoría financiera", "Crédito rotativo", "Compra de cartera", "Seguros de vida", "Seguro de deudores", "SOAT", "Mejora tu puntaje", "Habeas Data"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const deviceY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ax = useSpring(useTransform(mx, [-1, 1], [-60, 60]), { stiffness: 30, damping: 20 });
  const ay = useSpring(useTransform(my, [-1, 1], [-40, 40]), { stiffness: 30, damping: 20 });
  const bx = useSpring(useTransform(mx, [-1, 1], [50, -50]), { stiffness: 30, damping: 20 });

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
      className="relative overflow-hidden pt-32 md:pt-36"
    >
      {/* Aurora */}
      <motion.div style={{ x: ax, y: ay }} aria-hidden className="absolute -right-32 -top-48 h-[720px] w-[720px] rounded-full bg-electric opacity-40 blur-[140px]" />
      <motion.div style={{ x: bx }} aria-hidden className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan opacity-[0.16] blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-lime opacity-[0.07] blur-[120px]" />
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-16 px-6 pb-20 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.span className="intro-fade glass inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-sm text-fog" style={{ "--d": "0ms" } as CSSProperties}
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 font-mono text-[11px] font-bold text-void">
              <Sparkles className="h-3 w-3" /> NUEVO
            </span>
            Diagnóstico gratis en 30 segundos
          </motion.span>

          <SplitHeading
            as="h1"
            immediate
            lines={[...hero.title, { text: hero.accent, className: "text-electric-gradient" }]}
            className="mt-8 text-[13vw] font-semibold leading-[0.95] tracking-[-0.055em] text-snow sm:text-7xl lg:text-[4rem] xl:text-[4.5rem]"
          />
          <motion.p className="intro-fade mt-8 max-w-xl text-lg leading-relaxed text-fog" style={{ "--d": "500ms" } as CSSProperties}
          >
            {hero.intro}
          </motion.p>
          <motion.div className="intro-fade mt-10 flex flex-wrap gap-3" style={{ "--d": "650ms" } as CSSProperties}
          >
            <Magnetic>
              <Link href="#diagnostico" className="glow-lime group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-void transition-transform hover:scale-[1.03]">
                Haz tu diagnóstico <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-snow transition-colors hover:bg-white/10"
            >
              Hablar con un asesor
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-fog"
          >
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-lime" /> CIFIN · TransUnion</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-lime" /> DataCrédito · Experian</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-lime" /> Ley de Habeas Data</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: deviceY }}
          initial={{ opacity: 0, y: 60, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[540px] [perspective:1200px]"
        >
          <ScoreDevice />
        </motion.div>
      </div>

      <div className="relative border-y border-white/[0.07] bg-white/[0.02] py-5">
        <Marquee speed={40}>
          {ticker.map((t) => (
            <span key={t} className="mx-8 inline-flex items-center gap-8 text-lg font-medium text-fog">
              {t}
              <span className="h-1.5 w-1.5 rotate-45 bg-lime" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
