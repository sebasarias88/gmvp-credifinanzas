import { cn } from "@/lib/cn";

/**
 * Provisional mark for GMVP Credifinanzas: three rising bars, the last one lit.
 * Swap for the official logo in /public/brand when available.
 */
export function Logo({ className }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <rect width="40" height="40" rx="12" fill="#0c111d" stroke="rgba(255,255,255,0.12)" />
        <rect x="9" y="22" width="5" height="9" rx="2.5" fill="#3B6CFF" />
        <rect x="17.5" y="16" width="5" height="15" rx="2.5" fill="#22D3EE" />
        <rect x="26" y="9" width="5" height="22" rx="2.5" fill="#C8FF4D" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-[-0.03em] text-snow">Credifinanzas</span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-steel">by GMVP</span>
      </span>
    </span>
  );
}
