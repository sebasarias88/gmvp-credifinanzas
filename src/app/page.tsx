import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/home/Hero";
import { ReportStory } from "@/components/sections/home/ReportStory";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CreditQuiz } from "@/components/sections/CreditQuiz";
import { Steps, Eyebrow, SectionTitle, EducationCards } from "@/components/sections/Blocks";
import { Reveal } from "@/components/core/Reveal";
import { Counter } from "@/components/core/Counter";

export default function HomePage() {
  const since = new Date().getFullYear() - 2015;
  return (
    <>
      <Hero />
      <ReportStory />

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Productos y servicios</Eyebrow>
            <SectionTitle lines={["Soluciones para cada", { text: "etapa de tu crédito.", className: "text-blue" }]} />
          </div>
          <Reveal>
            <Link href="/servicios" className="group inline-flex items-center gap-2 font-bold text-blue">
              Ver todos los servicios <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <ServicesBento />
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Cómo funciona</Eyebrow>
              <SectionTitle lines={["Tres pasos para", { text: "volver al sistema.", className: "text-blue" }]} />
            </div>
            <Reveal className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-mist p-6">
                <Counter to={since} suffix="+" className="font-display text-5xl font-extrabold text-navy" />
                <p className="mt-1 text-sm font-semibold text-slate">años asesorando</p>
              </div>
              <div className="rounded-3xl bg-mist p-6">
                <Counter to={4} className="font-display text-5xl font-extrabold text-navy" />
                <p className="mt-1 text-sm font-semibold text-slate">líneas de servicio</p>
              </div>
            </Reveal>
          </div>
          <Steps />
        </div>
      </section>

      <section id="diagnostico" className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-28 md:px-10 md:py-36">
        <div className="mb-12 max-w-3xl">
          <Eyebrow>Autodiagnóstico</Eyebrow>
          <SectionTitle lines={["¿Cuál es tu", { text: "siguiente paso?", className: "text-blue" }]} />
        </div>
        <Reveal>
          <CreditQuiz />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Educación financiera</Eyebrow>
            <SectionTitle lines={["Cuida tu historial", { text: "como un experto.", className: "text-blue" }]} />
          </div>
          <Reveal>
            <Link href="/educacion" className="group inline-flex items-center gap-2 font-bold text-blue">
              Ver todos los consejos <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <EducationCards limit={3} />
      </section>
    </>
  );
}
