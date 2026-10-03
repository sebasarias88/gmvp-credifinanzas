import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EducationCards } from "@/components/sections/Blocks";

export const metadata: Metadata = {
  title: "Educación financiera",
  description: "Consejos prácticos para cuidar tu historial crediticio, mejorar tu puntaje y conocer tus derechos.",
  alternates: { canonical: "/educacion" },
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        label="Educación financiera"
        lines={["Un buen historial", { text: "se construye.", className: "text-gold" }]}
        intro="Consejos prácticos de nuestros asesores para cuidar tu vida crediticia y tomar mejores decisiones."
      />
      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <EducationCards />
        <p className="mt-10 text-sm text-haze">Contenido informativo. Para tu caso particular, agenda una asesoría.</p>
      </section>
    </>
  );
}
