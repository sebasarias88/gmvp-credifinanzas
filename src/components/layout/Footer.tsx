import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, disclaimer, services, welcome } from "@/content/site";
import { handshakeContract } from "@/assets/images";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink">
      <div aria-hidden className="absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-electric opacity-20 blur-[140px]" />
      <div className="relative mx-auto max-w-[1320px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="ring-gradient relative overflow-hidden rounded-[36px]">
          <Image src={handshakeContract} alt="" fill sizes="100vw" className="img-cool object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/30" />
          <div className="relative grid gap-10 p-8 md:grid-cols-[1.5fr_1fr] md:items-end md:p-14">
            <div>
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] text-snow md:text-6xl">
                ¿Reportado y quieres volver a tener <span className="text-electric-gradient">vida crediticia?</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-fog">{welcome.cta.text}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quiero saber cómo volver a tener vida crediticia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-lime group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-void transition-transform hover:scale-[1.03]"
              >
                Chatea con nosotros <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </a>
              <a href={site.phoneHref} className="text-center font-mono text-sm text-fog md:text-right">{site.phone}</a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="full" />
            <p className="max-w-xs text-sm leading-relaxed text-fog">
              Una compañía de{" "}
              <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-snow underline-offset-4 hover:underline">
                {site.parent.name}
              </a>
              .
            </p>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">Navegación</p>
            <ul className="space-y-2 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-fog hover:text-snow">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">Servicios</p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/servicios#${s.slug}`} className="text-fog hover:text-snow">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">Contacto</p>
            <ul className="space-y-2 text-sm text-fog">
              <li>{site.address.city}, {site.address.country}</li>
              <li><a href={site.phoneHref} className="hover:text-snow">{site.phone}</a></li>
              <li><a href={`mailto:${site.emails.info}`} className="break-all hover:text-snow">{site.emails.info}</a></li>
              <li><a href={`mailto:${site.emails.service}`} className="break-all hover:text-snow">{site.emails.service}</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-14 max-w-4xl text-xs leading-relaxed text-steel">{disclaimer}</p>
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-xs text-steel md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-snow">Privacidad y cookies</Link>
            <a href={`mailto:${site.emails.legal}`} className="hover:text-snow">Notificaciones judiciales</a>
          </div>
        </div>

        <p aria-hidden className="pointer-events-none mt-10 select-none text-center font-display text-[7.6vw] font-semibold leading-none tracking-tight text-white/[0.03]">
          CREDIFINANZAS
        </p>
      </div>
    </footer>
  );
}
