"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, CreditCard, LineChart, Umbrella } from "lucide-react";
import { services } from "@/content/site";
import { TiltCard } from "@/components/core/TiltCard";
import { RevealGroup, RevealItem } from "@/components/core/Reveal";
import { cn } from "@/lib/cn";

const icons = { asesorias: LineChart, "credito-rotativo": CreditCard, "compra-de-cartera": Briefcase, seguros: Umbrella } as const;
const layout = [
  "lg:col-span-7 bg-navy text-white theme-dark",
  "lg:col-span-5 bg-gold text-navy",
  "lg:col-span-5 bg-white text-navy",
  "lg:col-span-7 bg-blue text-white theme-dark",
];

export function ServicesBento({ detailed = false }: { detailed?: boolean }) {
  return (
    <RevealGroup className="grid gap-5 lg:grid-cols-12">
      {services.map((s, i) => {
        const Icon = icons[s.slug];
        return (
          <RevealItem key={s.slug} className={cn("group", layout[i].split(" ")[0])}>
            <TiltCard max={4} className="h-full rounded-[32px]">
              <Link
                id={s.slug}
                href={detailed ? `/contacto?servicio=${s.slug}` : `/servicios#${s.slug}`}
                data-cursor="Ver"
                className={cn(
                  "relative flex h-full min-h-[340px] scroll-mt-32 flex-col justify-between overflow-hidden rounded-[32px] border border-black/5 p-8 md:p-10",
                  layout[i].split(" ").slice(1).join(" "),
                )}
              >
                <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-current opacity-[0.06] transition-transform duration-700 group-hover:scale-150" />
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-current/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
                </div>
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{s.kicker}</p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed opacity-80">{s.text}</p>
                  {detailed && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold">{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </TiltCard>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
