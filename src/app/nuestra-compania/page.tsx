import type { Metadata } from "next";
import { about, story } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, SectionTitle, ValuesGrid } from "@/components/sections/Blocks";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";
import { ScrubText } from "@/components/core/ScrubText";

export const metadata: Metadata = {
  title: "Nuestra compañía",
  description: "Historia, misión, visión y valores de GMVP Credifinanzas, compañía de asesoramiento financiero desde 2015.",
  alternates: { canonical: "/nuestra-compania" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHero label="Nuestra compañía" lines={["Asesoría financiera", { text: "con calidez humana.", className: "text-gold" }]} intro={story.text} />

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <Eyebrow>Quiénes somos</Eyebrow>
        <div className="space-y-10">
          {about.who.map((p) => (
            <ScrubText key={p.slice(0, 20)} text={p} className="max-w-5xl font-display text-2xl font-semibold leading-snug tracking-tight text-navy md:text-4xl" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <RevealGroup className="grid gap-5 md:grid-cols-2">
          <RevealItem className="theme-dark rounded-[32px] bg-navy p-10 md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Misión</p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">{about.mission}</p>
          </RevealItem>
          <RevealItem className="rounded-[32px] bg-gold p-10 md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy/70">Visión</p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug text-navy md:text-3xl">{about.vision}</p>
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Nuestros principios</Eyebrow>
              <SectionTitle lines={["Valores que", { text: "nos mueven.", className: "text-blue" }]} />
            </div>
            <Reveal><p className="text-lg text-slate">{about.valuesIntro}</p></Reveal>
          </div>
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
