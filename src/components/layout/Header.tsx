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
    setScrolled(y > 40);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 md:px-8"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1320px] items-center justify-between rounded-full py-2.5 pl-4 pr-2.5 transition-all duration-500 md:pl-5",
            scrolled || open ? "glass shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]" : "border border-transparent",
          )}
        >
          <Link href="/" aria-label="GMVP Credifinanzas — inicio">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("relative rounded-full px-4 py-2 text-sm font-medium transition-colors", active ? "text-snow" : "text-fog hover:text-snow")}
                >
                  {active && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic className="hidden md:inline-flex">
              <Link href="/contacto" className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-void transition-transform hover:scale-[1.03]">
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
              className="relative grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
            >
              <span className={cn("absolute h-0.5 w-5 rounded bg-snow transition-transform duration-500", open ? "rotate-45" : "-translate-y-1")} />
              <span className={cn("absolute h-0.5 w-5 rounded bg-snow transition-transform duration-500", open ? "-rotate-45" : "translate-y-1")} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-void/95 px-6 pb-10 pt-32 backdrop-blur-xl"
          >
            <nav aria-label="Móvil" className="flex flex-col">
              {[{ href: "/", label: "Inicio" }, ...site.nav].map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + i * 0.05, duration: 0.5 }}>
                  <Link href={item.href} className="flex items-center justify-between border-b border-white/10 py-5 text-3xl font-semibold tracking-tight text-snow">
                    {item.label}
                    <ArrowUpRight className="h-6 w-6 text-lime" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-lime px-6 py-5 text-center font-semibold text-void">
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
