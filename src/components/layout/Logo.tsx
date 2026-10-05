import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Official GMVP mark (vectorized from the company's artwork in /public/brand)
 * paired with the Credifinanzas name.
 */
export function Logo({ className, variant = "compact" }: { className?: string; variant?: "compact" | "full" }) {
  if (variant === "full") {
    return (
      <span className={cn("flex flex-col gap-3", className)}>
        <Image src="/brand/gmvp-logo-light.svg" alt="GMVP Group Enterprise S.A.S" width={3060} height={1950} unoptimized className="h-auto w-48" />
        <span className="text-xl font-semibold tracking-[-0.03em] text-snow">Credifinanzas</span>
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image src="/brand/gmvp-mark.svg" alt="GMVP" width={3060} height={1490} unoptimized preload className="h-8 w-auto md:h-9" />
      <span aria-hidden className="h-7 w-px bg-white/15" />
      <span className="text-[17px] font-semibold tracking-[-0.03em] text-snow">Credifinanzas</span>
    </span>
  );
}
