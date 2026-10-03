import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/core/SmoothScroll";
import { Cursor } from "@/components/core/Cursor";
import { ScrollProgress } from "@/components/core/ScrollProgress";
import { WhatsAppButton } from "@/components/core/WhatsAppButton";
import { IntroSignal } from "@/components/core/IntroSignal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Asesoría financiera y crédito rotativo`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "reportado en Datacrédito",
    "CIFIN TransUnion",
    "mejorar puntaje crediticio",
    "crédito rotativo",
    "compra de cartera",
    "asesoría financiera Armenia",
    "Habeas Data",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Vuelve a tener vida crediticia`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0a1a3f" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.emails.info,
  areaServed: "CO",
  address: { "@type": "PostalAddress", addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: "CO" },
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
  foundingDate: "2015",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO">
      <body className="grain min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-xl focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
          Saltar al contenido
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <IntroSignal />
        <ScrollProgress />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton
          phone={site.whatsapp}
          message="Hola, me interesa saber más sobre sus servicios."
          teaser="¿Reportado? Te ayudamos a volver a tener vida crediticia."
        />
      </body>
    </html>
  );
}
