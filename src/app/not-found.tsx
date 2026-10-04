import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[90svh] flex-col justify-center px-6 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="font-mono text-sm text-lime">Error 404</p>
        <h1 className="mt-4 text-6xl font-semibold tracking-[-0.05em] text-snow md:text-8xl">Esta página no existe.</h1>
        <p className="mt-6 max-w-md text-fog">Pero tu nuevo historial sí puede existir. Volvamos al inicio.</p>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-lime px-7 py-4 font-semibold text-void">Ir al inicio</Link>
      </div>
    </section>
  );
}
