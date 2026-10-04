import type { Metadata } from "next";
import { tabletReview } from "@/assets/images";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Eyebrow, SectionTitle, Steps } from "@/components/sections/Blocks";
import { CreditQuiz } from "@/components/sections/CreditQuiz";
import { Reveal } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Productos y servicios",
  description:
    "Asesorías financieras para reportados en CIFIN-TransUnion y DataCrédito-Experian, crédito rotativo, compra de cartera y seguros financiados.",
  alternates: { canonical: "/servicios" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={tabletReview}
        label="Productos y servicios"
        lines={["Asesorías para personas", { text: "naturales y jurídicas.", className: "text-electric-gradient" }]}
        intro="Reportes en CIFIN (TransUnion) y DataCrédito (Experian), mejora de puntaje, crédito rotativo, compra de cartera y seguros."
      />
      <section className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-32">
        <ServicesBento detailed />
      </section>
      <section className="border-y border-white/[0.07]">
        <div className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <SectionTitle className="mb-16" lines={["Del reporte", { text: "al crédito.", className: "text-electric-gradient" }]} />
          <Steps />
        </div>
      </section>
      <section className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-36">
        <Eyebrow>¿No sabes por dónde empezar?</Eyebrow>
        <SectionTitle className="mb-12" lines={["Haz tu", { text: "diagnóstico.", className: "text-electric-gradient" }]} />
        <Reveal><CreditQuiz /></Reveal>
      </section>
    </>
  );
}
