import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lightbulb, Scale, Users } from "lucide-react";
import { Hero } from "@/components/sections/home/Hero";
import { ReportStory } from "@/components/sections/home/ReportStory";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CreditQuiz } from "@/components/sections/CreditQuiz";
import { Steps, Eyebrow, SectionTitle, EducationCards } from "@/components/sections/Blocks";
import { Reveal } from "@/components/core/Reveal";
import { Counter } from "@/components/core/Counter";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { officeMeeting, tabletReview } from "@/assets/images";
import { about, welcome } from "@/content/site";

export default function HomePage() {
  const since = new Date().getFullYear() - 2015;
  return (
    <>
      <Hero />
      <ReportStory />

      {/* Welcome: national coverage + "did you know" */}
      <section className="mx-auto grid max-w-[1360px] items-center gap-12 px-6 pt-28 md:px-10 md:pt-36 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>Bienvenido a GMVP Credifinanzas</Eyebrow>
          <SectionTitle lines={[welcome.title[0], { text: welcome.title[1], className: "text-electric-gradient" }]} />
          <Reveal>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">{welcome.text}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="glass ring-gradient relative overflow-hidden rounded-[32px] p-7 md:p-10">
          <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime opacity-10 blur-3xl" />
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-lime">
            <Lightbulb className="h-4 w-4" /> ¿Sabías que…?
          </span>
          <p className="relative mt-5 text-xl leading-snug text-snow md:text-2xl">{welcome.didYouKnow}</p>
          <ul className="relative mt-7 flex flex-wrap gap-2">
            {welcome.sectors.map((s) => (
              <li key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-fog">Sector {s.toLowerCase()}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Productos y servicios</Eyebrow>
            <SectionTitle lines={["Soluciones para cada", { text: "etapa de tu crédito.", className: "text-electric-gradient" }]} />
          </div>
          <Reveal>
            <Link href="/servicios" className="group inline-flex items-center gap-2 font-medium text-lime">
              Ver todos los servicios <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <ServicesBento />
      </section>

      {/* Team + numbers */}
      <section className="relative">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
          <div className="relative">
            <ParallaxImage src={officeMeeting} alt="Equipo de asesores de Credifinanzas en reunión" className="ring-gradient aspect-[5/4] rounded-[32px]" imageClassName="img-cool" sizes="(min-width:1024px) 50vw, 100vw" />
            <div className="glass animate-float absolute -bottom-8 right-6 rounded-3xl p-5 md:right-10">
              <Counter to={since} suffix="+" className="font-display text-5xl font-semibold text-lime" />
              <p className="mt-1 text-sm text-fog">años asesorando</p>
            </div>
          </div>
          <div>
            <Eyebrow>Actitud de equipo</Eyebrow>
            <SectionTitle lines={["Asesores financieros", { text: "y abogados de tu lado.", className: "text-electric-gradient" }]} />
            <Reveal>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">{about.values[0].text}</p>
            </Reveal>
            <Reveal className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/[0.07] bg-panel p-6">
                <Users className="h-5 w-5 text-cyan" />
                <Counter to={4} className="mt-4 block font-display text-4xl font-semibold text-snow" />
                <p className="mt-1 text-sm text-fog">líneas de servicio</p>
              </div>
              <div className="rounded-3xl border border-white/[0.07] bg-panel p-6">
                <Scale className="h-5 w-5 text-lime" />
                <p className="mt-4 font-display text-4xl font-semibold text-snow">1266</p>
                <p className="mt-1 text-sm text-fog">Ley de Habeas Data</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl">
          <Eyebrow>Cómo funciona</Eyebrow>
          <SectionTitle lines={["Tres pasos para", { text: "volver al sistema.", className: "text-electric-gradient" }]} />
        </div>
        <Steps />
      </section>

      <section id="diagnostico" className="relative scroll-mt-24 overflow-hidden">
        <Image src={tabletReview} alt="" fill sizes="100vw" className="img-cool object-cover opacity-30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
        <div className="relative mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-12 max-w-3xl">
            <Eyebrow>Autodiagnóstico</Eyebrow>
            <SectionTitle lines={["¿Cuál es tu", { text: "siguiente paso?", className: "text-electric-gradient" }]} />
          </div>
          <Reveal>
            <CreditQuiz />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Educación financiera</Eyebrow>
            <SectionTitle lines={["Cuida tu historial", { text: "como un experto.", className: "text-electric-gradient" }]} />
          </div>
          <Reveal>
            <Link href="/educacion" className="group inline-flex items-center gap-2 font-medium text-lime">
              Ver todos los consejos <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <EducationCards limit={3} />
      </section>
    </>
  );
}
