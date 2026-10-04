"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, CreditCard, LineChart, Umbrella } from "lucide-react";
import { services } from "@/content/site";
import { advisoryMeeting, chartsTablet, laptopWork, tabletReview } from "@/assets/images";
import { TiltCard } from "@/components/core/TiltCard";
import { RevealGroup, RevealItem } from "@/components/core/Reveal";
import { cn } from "@/lib/cn";

const icons = { asesorias: LineChart, "credito-rotativo": CreditCard, "compra-de-cartera": Briefcase, seguros: Umbrella } as const;
const photos = { asesorias: advisoryMeeting, "credito-rotativo": tabletReview, "compra-de-cartera": chartsTablet, seguros: laptopWork } as const;
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const accents = ["text-lime", "text-cyan", "text-electric-soft", "text-amber"];

/** Photo-backed service cards with glass content panels and gradient rims. */
export function ServicesBento({ detailed = false }: { detailed?: boolean }) {
  return (
    <RevealGroup className="grid gap-5 lg:grid-cols-12">
      {services.map((s, i) => {
        const Icon = icons[s.slug];
        return (
          <RevealItem key={s.slug} className={cn("group", spans[i])}>
            <TiltCard max={4} className="h-full rounded-[32px]">
              <Link
                id={s.slug}
                href={detailed ? `/contacto?servicio=${s.slug}` : `/servicios#${s.slug}`}
                data-cursor="Ver"
                className="ring-gradient relative flex h-full min-h-[420px] scroll-mt-32 flex-col justify-end overflow-hidden rounded-[32px] bg-panel"
              >
                <Image
                  src={photos[s.slug]}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="img-cool object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/10" />
                <div className="relative flex items-start justify-between p-7 md:p-9">
                  <span className={cn("glass grid h-12 w-12 place-items-center rounded-2xl", accents[i])}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="relative mt-auto p-7 pt-0 md:p-9 md:pt-0">
                  <p className={cn("font-mono text-[11px] uppercase tracking-[0.18em]", accents[i])}>{s.kicker}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-snow md:text-4xl">{s.title}</h3>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-snow transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime group-hover:text-void">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-fog">{s.text}</p>
                  {detailed && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-snow">{b}</li>
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
