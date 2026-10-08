import Image from "next/image";
import { cn } from "@/lib/cn";
import crediLogo from "@/assets/brand/credi-logo-light.png";

/**
 * Official GMVP Credifinanzas S.A.S logo (golden hand + GMVP + "CREDIFINANZAS S.A.S").
 * The lettering is recolored light so it reads on the site's dark background.
 */
export function Logo({ className, variant = "compact" }: { className?: string; variant?: "compact" | "full" }) {
  return (
    <Image
      src={crediLogo}
      alt="GMVP Credifinanzas S.A.S"
      preload={variant === "compact"}
      sizes={variant === "full" ? "224px" : "120px"}
      className={cn(variant === "full" ? "h-auto w-56" : "h-12 w-auto md:h-16", className)}
    />
  );
}
