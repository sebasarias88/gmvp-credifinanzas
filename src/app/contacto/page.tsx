import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { handshakeContract } from "@/assets/images";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/core/ContactForm";
import { Reveal } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos o chatea con un asesor de GMVP Credifinanzas. Armenia, Quindío.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Teléfono y WhatsApp", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Información", value: site.emails.info, href: `mailto:${site.emails.info}` },
    { icon: Mail, label: "Servicio al cliente", value: site.emails.service, href: `mailto:${site.emails.service}` },
    { icon: MapPin, label: "Oficina", value: `${site.address.city}, ${site.address.region}`, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}` },
  ];
  return (
    <>
      <PageHero image={handshakeContract} label="Servicio al cliente" lines={["Hablemos de", { text: "tu caso.", className: "text-electric-gradient" }]} intro="Cuéntanos tu situación y un asesor te responderá con las mejores alternativas para ti." />
      <section className="mx-auto grid max-w-[1360px] gap-8 px-6 pb-28 md:px-10 lg:grid-cols-[1fr_1.4fr] [&>*]:min-w-0">
        <Reveal className="space-y-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-5 rounded-3xl border border-white/[0.07] bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-lime/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.05] text-lime transition-colors group-hover:bg-lime group-hover:text-void"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">{label}</span>
                <span className="mt-1 block break-all font-medium text-snow">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="glass ring-gradient rounded-[32px] p-7 md:p-12">
          <h2 className="mb-8 text-3xl font-semibold tracking-[-0.04em] text-snow md:text-4xl">Envíanos un mensaje</h2>
          <ContactForm whatsapp={site.whatsapp} />
        </Reveal>
      </section>
    </>
  );
}
