import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Política de privacidad y cookies", alternates: { canonical: "/privacidad" } };

// NOTE: base text aligned with Ley 1581 de 2012; have it reviewed by the client's legal team.
export default function PrivacyPage() {
  return (
    <>
      <div className="h-28 bg-navy" />
      <article className="mx-auto max-w-3xl px-6 py-20 text-slate">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue">Legal</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy md:text-6xl">Política de privacidad y cookies</h1>
        <div className="mt-12 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy">
          <section><h2>Responsable</h2><p>{site.legalName}, {site.address.city}, {site.address.region}. Correo: {site.emails.info}. Teléfono: {site.phone}.</p></section>
          <section><h2>Finalidad del tratamiento</h2><p>Usamos los datos que nos suministras para atender tus solicitudes, prestar nuestros servicios de asesoría y financiación, contactarte y cumplir obligaciones legales, conforme a la Ley 1581 de 2012.</p></section>
          <section><h2>Derechos del titular</h2><p>Puedes conocer, actualizar, rectificar y suprimir tus datos, solicitar prueba de la autorización, revocarla y presentar quejas ante la Superintendencia de Industria y Comercio. Escríbenos a {site.emails.service}.</p></section>
          <section><h2>Cookies</h2><p>Este sitio usa únicamente almacenamiento técnico necesario para su funcionamiento. No usamos cookies publicitarias.</p></section>
          <section><h2>Aviso legal</h2><p>El contenido de este sitio es informativo. Todo crédito está sujeto a estudio y aprobación. Notificaciones judiciales: {site.emails.legal}.</p></section>
        </div>
      </article>
    </>
  );
}
