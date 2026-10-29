export function Logo({ className }: { className?: string; variant?: "compact" | "full" }) {
  return <img src="/logo.svg" alt="GMVP Credifinanzas S.A.S" className={className ?? "h-14 w-auto"} />;
}
