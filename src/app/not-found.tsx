import Link from "next/link";

export default function NotFound() {
  return (
    <section className="theme-dark flex min-h-[90svh] flex-col justify-center bg-navy px-6 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="font-display text-sm font-bold text-gold">Error 404</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold tracking-tight text-white md:text-8xl">Esta página no existe.</h1>
        <p className="mt-6 max-w-md text-[var(--muted)]">Pero tu nuevo historial sí puede existir. Volvamos al inicio.</p>
        <Link href="/" className="mt-10 inline-flex rounded-2xl bg-gold px-7 py-4 font-bold text-navy">Ir al inicio</Link>
      </div>
    </section>
  );
}
