import { cn } from "@/lib/cn";

/**
 * Provisional mark for GMVP Credifinanzas (ascending bars = a growing score).
 * Swap for the official logo in /public/brand when available.
 */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <rect width="40" height="40" rx="12" fill="#E4B53A" />
        <rect x="9" y="22" width="5" height="9" rx="2" fill="#0A1A3F" />
        <rect x="17.5" y="16" width="5" height="15" rx="2" fill="#0A1A3F" />
        <rect x="26" y="9" width="5" height="22" rx="2" fill="#0A1A3F" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[17px] font-bold tracking-tight", tone === "light" ? "text-white" : "text-navy")}>Credifinanzas</span>
        <span className={cn("mt-1 text-[9px] font-semibold uppercase tracking-[0.32em]", tone === "light" ? "text-white/60" : "text-haze")}>by GMVP</span>
      </span>
    </span>
  );
}
