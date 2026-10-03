import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, disclaimer, services } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="theme-dark relative overflow-hidden bg-navy">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-[1320px] px-6 pb-10 pt-24 md:px-10">
        <div className="grid gap-10 rounded-[32px] bg-gold p-8 text-navy md:grid-cols-[1.5fr_1fr] md:items-center md:p-14">
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            ¿Reportado y quieres volver a tener vida crediticia?
          </h2>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quiero saber cómo volver a tener vida crediticia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-navy px-7 py-4 font-bold text-white transition-transform hover:scale-[1.03]"
            >
              Chatea con nosotros <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a href={site.phoneHref} className="text-center font-semibold md:text-right">{site.phone}</a>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Una compañía de{" "}
              <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline-offset-4 hover:underline">
                {site.parent.name}
              </a>
              .
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Navegación</p>
            <ul className="space-y-2 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-[var(--muted)] hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Servicios</p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/servicios#${s.slug}`} className="text-[var(--muted)] hover:text-white">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Contacto</p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>{site.address.city}, {site.address.region}</li>
              <li><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
              <li><a href={`mailto:${site.emails.info}`} className="break-all hover:text-white">{site.emails.info}</a></li>
              <li><a href={`mailto:${site.emails.service}`} className="break-all hover:text-white">{site.emails.service}</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-14 max-w-4xl text-xs leading-relaxed text-[var(--muted)]">{disclaimer}</p>
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white">Política de privacidad y cookies</Link>
            <a href={`mailto:${site.emails.legal}`} className="hover:text-white">Notificaciones judiciales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
