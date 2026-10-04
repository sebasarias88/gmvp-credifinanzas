import type { Metadata } from "next";
import { laptopWork } from "@/assets/images";
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
        image={laptopWork}
        label="Educación financiera"
        lines={["Un buen historial", { text: "se construye.", className: "text-electric-gradient" }]}
        intro="Consejos prácticos de nuestros asesores para cuidar tu vida crediticia y tomar mejores decisiones."
      />
      <section className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-32">
        <EducationCards />
        <p className="mt-10 text-sm text-steel">Contenido informativo. Para tu caso particular, agenda una asesoría.</p>
      </section>
    </>
  );
}
