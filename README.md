# GMVP Credifinanzas

Sitio web de **gmvpcredifinanzas.com**, reconstruido desde cero con el contenido del sitio original.

Concepto visual: **Fintech moderno** — navy, azul de marca, dorado GMVP y menta (Sora + Plus Jakarta Sans).

## Lo que incluye

- Hero con **medidor de puntaje animado** (rojo → menta) y tarjetas de vidrio flotantes
- **Historia 2015 con reporte crediticio que pasa de rojo a verde** mientras la sección está fijada (scrub)
- Servicios en bento con tilt
- Pasos con línea que se dibuja con el scroll
- **Autodiagnóstico de 3 preguntas** que recomienda un servicio y envía las respuestas por WhatsApp
- Nueva sección **Educación financiera** (reemplaza la página Noticias vacía)
- Política de cobranza 30/60/90 como línea de tiempo
- Botón de WhatsApp con mensaje contextual, transiciones de página

**Páginas:** `/` · `/nuestra-compania` · `/servicios` · `/educacion` · `/politicas` · `/contacto` · `/privacidad`

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens de diseño en `src/app/globals.css`, bloque `@theme`)
- **GSAP + ScrollTrigger** (secciones fijadas, scroll horizontal, scrub), **Lenis** (smooth scroll) y **Motion** (Framer Motion) para microinteracciones
- Fuentes autoalojadas con **Fontsource** (sin dependencia de Google Fonts)
- `lucide-react` para iconos

## Arrancar

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build && yarn start
yarn lint
```

## Estructura

```
src/
  app/                  rutas (App Router), metadata, sitemap, robots, OG image, api/
  components/
    core/               animación y UI reutilizable (SmoothScroll, SplitHeading, ScrubText,
                        Reveal, Counter, Magnetic, TiltCard, Marquee, Cursor, Accordion,
                        ContactForm, WhatsAppButton…)
    layout/             Header, Footer, Logo, Preloader
    sections/           secciones de cada página
  content/              ⭐ TODOS los textos y datos del sitio (editar aquí)
  lib/                  utilidades (cn, gsap, intro, useMediaQuery)
```

## Formulario de contacto

`/api/contact` envía el correo con **Resend** si existen estas variables (ver `.env.example`):

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=   # opcional, dominio verificado en Resend
```

Si no están configuradas, el formulario abre WhatsApp con el mensaje prellenado (nunca se pierde un contacto).

## Despliegue (Vercel)

1. Sube el repo a GitHub y crea el proyecto en Vercel (framework: Next.js).
2. Agrega las variables de entorno.
3. En *Domains* agrega `gmvpcredifinanzas.com` y `www.gmvpcredifinanzas.com` y apunta los DNS (A `76.76.21.21` / CNAME `cname.vercel-dns.com`).
4. Las URLs viejas de WordPress ya redirigen (301) a las nuevas: ver `next.config.ts`.

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva smooth scroll, cursor, preloader y animaciones pesadas).
- Cursor personalizado solo en dispositivos con mouse.
- Enlace “Saltar al contenido”, foco visible, roles ARIA en tabs/acordeones.
- SEO: metadata por página, Open Graph generado, JSON-LD, `sitemap.xml` y `robots.txt`.

## Pendientes con el cliente

- [ ] Logo oficial en SVG/PNG con fondo transparente
- [ ] Dirección exacta de la oficina (hoy solo “Armenia, Quindío”)
- [ ] Enlaces reales de redes sociales (el sitio viejo tenía iconos sin enlace)
- [ ] Condiciones del crédito rotativo (cupo, plazo, requisitos) si quieren mostrarlas
- [ ] Revisión legal: el sitio evita prometer “borrar reportes”; habla de asesoría según la Ley de Habeas Data
