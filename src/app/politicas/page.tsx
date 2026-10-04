import type { Metadata } from "next";
import { ShieldCheck, Scale } from "lucide-react";
import { policies } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CollectionTimeline, Eyebrow, SectionTitle } from "@/components/sections/Blocks";
import { RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Políticas",
  description: "Política de cobranza, manejo de datos personales y gestión de riesgo de GMVP Credifinanzas.",
  alternates: { canonical: "/politicas" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero label="Políticas" lines={["Reglas claras,", { text: "confianza total.", className: "text-electric-gradient" }]} intro={policies.intro} />
      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-36">
        <Eyebrow>Política de cobranza</Eyebrow>
        <SectionTitle className="mb-12" lines={["30 · 60 · 90", { text: "días.", className: "text-electric-gradient" }]} />
        <CollectionTimeline />
      </section>
      <section className="mx-auto max-w-[1360px] px-6 pb-28 md:px-10 md:pb-36">
        <RevealGroup className="grid gap-5 md:grid-cols-2">
          {[
            { icon: ShieldCheck, title: "Manejo de datos personales", text: policies.data },
            { icon: Scale, title: "Gestión de riesgo", text: policies.risk },
          ].map(({ icon: Icon, title, text }) => (
            <RevealItem key={title} className="rounded-[32px] border border-white/[0.07] bg-panel p-10">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lime/10 text-lime"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-snow">{title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-fog">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
