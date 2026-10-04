import type { Metadata } from "next";
import { about, story } from "@/content/site";
import { advisoryMeeting, handshakeContract } from "@/assets/images";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, SectionTitle, ValuesGrid } from "@/components/sections/Blocks";
import { Reveal } from "@/components/core/Reveal";
import { ScrubText } from "@/components/core/ScrubText";
import { ParallaxImage } from "@/components/core/ParallaxImage";

export const metadata: Metadata = {
  title: "Nuestra compañía",
  description: "Historia, misión, visión y valores de GMVP Credifinanzas, compañía de asesoramiento financiero desde 2015.",
  alternates: { canonical: "/nuestra-compania" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHero image={advisoryMeeting} label="Nuestra compañía" lines={["Asesoría financiera", { text: "con calidez humana.", className: "text-electric-gradient" }]} intro={story.text} />

      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
        <Eyebrow>Quiénes somos</Eyebrow>
        <div className="space-y-10">
          {about.who.map((p) => (
            <ScrubText key={p.slice(0, 20)} text={p} className="max-w-5xl text-2xl font-medium leading-snug tracking-[-0.03em] text-snow md:text-4xl" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.1fr]">
          <Reveal className="glass ring-gradient rounded-[32px] p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">Misión</p>
              <p className="mt-8 text-2xl font-medium leading-snug tracking-tight text-snow">{about.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[32px] bg-lime p-10 text-void">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-void/60">Visión</p>
              <p className="mt-8 text-2xl font-semibold leading-snug tracking-tight">{about.vision}</p>
          </Reveal>
          <ParallaxImage src={handshakeContract} alt="Firma de un acuerdo financiero" className="ring-gradient min-h-[320px] rounded-[32px]" imageClassName="img-cool" sizes="(min-width:1024px) 33vw, 100vw" />
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Nuestros principios</Eyebrow>
              <SectionTitle lines={["Valores que", { text: "nos mueven.", className: "text-electric-gradient" }]} />
            </div>
            <Reveal><p className="text-lg text-fog">{about.valuesIntro}</p></Reveal>
          </div>
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
