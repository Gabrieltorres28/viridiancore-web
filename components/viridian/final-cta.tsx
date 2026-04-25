import { MessageCircle, ArrowUpRight } from "lucide-react"
import { SectionStarfield } from "./section-starfield"

const WHATSAPP_URL =
  "https://wa.me/543751471708?text=Hola%2C%20quiero%20consultar%20por%20un%20sitio%20web%20o%20sistema%20para%20mi%20negocio."

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36">
      <SectionStarfield variant="cta" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
          {/* Viridian radial accent */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_100%_0%,color-mix(in_oklch,var(--viridian)_22%,transparent)_0%,transparent_60%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_0%_100%,color-mix(in_oklch,var(--viridian)_14%,transparent)_0%,transparent_60%)]"
            aria-hidden="true"
          />
          {/* Top hairline accent */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viridian/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-10 p-10 md:p-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
                / 006 — Contacto
              </span>
              <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl">
                Si tu negocio necesita ordenar procesos, ya podemos{" "}
                <span className="text-viridian">definir el próximo paso.</span>
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
                Conversemos sobre tu sitio web, sistema de gestión o proceso
                interno y evaluemos qué conviene construir primero.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-viridian px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-viridian/90 hover:shadow-[0_0_36px_-8px_var(--viridian)]"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/50 lg:text-right">
                Respuesta directa · Sin formularios
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
