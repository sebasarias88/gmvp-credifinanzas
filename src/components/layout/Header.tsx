"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/core/Magnetic";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 60);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  const light = !scrolled && !open; // over the dark hero

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 md:px-8"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-5",
            light ? "bg-transparent" : "border border-line bg-white/85 shadow-[0_10px_40px_-20px_rgba(10,26,63,0.35)] backdrop-blur-xl",
          )}
        >
          <Link href="/" aria-label="GMVP Credifinanzas — inicio">
            <Logo tone={light ? "light" : "dark"} />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                    light ? "text-white/75 hover:text-white" : "text-slate hover:text-navy",
                    active && (light ? "text-white" : "text-navy"),
                  )}
                >
                  {active && (
                    <motion.span layoutId="nav-pill" className={cn("absolute inset-0 -z-10 rounded-xl", light ? "bg-white/10" : "bg-sky")} />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden md:inline-flex">
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-transform hover:scale-[1.03]"
              >
                Revisar mi caso
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className={cn(
                "relative grid h-11 w-11 place-items-center rounded-xl border lg:hidden",
                light ? "border-white/25" : "border-line",
              )}
            >
              <span className={cn("absolute h-0.5 w-5 rounded transition-transform duration-500", light ? "bg-white" : "bg-navy", open ? "rotate-45" : "-translate-y-1")} />
              <span className={cn("absolute h-0.5 w-5 rounded transition-transform duration-500", light ? "bg-white" : "bg-navy", open ? "-rotate-45" : "translate-y-1")} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-white px-6 pb-10 pt-32"
          >
            <nav aria-label="Móvil" className="flex flex-col gap-1">
              {[{ href: "/", label: "Inicio" }, ...site.nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                >
                  <Link href={item.href} className="block border-b border-line py-4 font-display text-3xl font-bold text-navy">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-navy px-6 py-5 text-center font-bold text-white">
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
