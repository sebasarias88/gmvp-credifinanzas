import type { Metadata } from "next";
import { ShieldCheck, Scale } from "lucide-react";
import { policies } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CollectionTimeline } from "@/components/sections/Blocks";
import { RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Políticas",
  description: "Política de cobranza, manejo de datos personales y gestión de riesgo de GMVP Credifinanzas.",
  alternates: { canonical: "/politicas" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero label="Políticas" lines={["Reglas claras,", { text: "confianza total.", className: "text-gold" }]} intro={policies.intro} />
      <section className="theme-dark bg-navy">
        <div className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
          <h2 className="mb-10 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">Política de cobranza</h2>
          <CollectionTimeline />
        </div>
      </section>
      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <RevealGroup className="grid gap-5 md:grid-cols-2">
          {[
            { icon: ShieldCheck, title: "Manejo de datos personales", text: policies.data },
            { icon: Scale, title: "Gestión de riesgo", text: policies.risk },
          ].map(({ icon: Icon, title, text }) => (
            <RevealItem key={title} className="rounded-[32px] border border-line bg-white p-10">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky text-blue"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-8 font-display text-2xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
