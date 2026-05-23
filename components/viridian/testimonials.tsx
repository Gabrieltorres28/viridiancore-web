import { MessageSquareQuote, ShieldCheck } from "lucide-react"
import { SectionStarfield } from "./section-starfield"

type Testimonial = {
  name: string
  role: string
  category: string
  quote: string
  source: string
  relatedProject?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dos Hermanas Agua",
    role: "Cliente real",
    category: "Sistema de gestión para reparto de agua",
    quote:
      "Estoy muy conforme con el programa que compré y con todo el acompañamiento brindado. ¡Excelente atención!",
    source: "Comentario real en Instagram",
    relatedProject: "Sistema para repartos y distribuidoras",
  },
]

export function Testimonials() {
  return (
    <section
      id="validacion"
      className="relative overflow-hidden border-t border-border/50 bg-background py-20 md:py-28"
    >
      <SectionStarfield variant="services" />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_55%_at_50%_0%,color-mix(in_oklch,var(--viridian)_12%,transparent)_0%,transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
              / 003 — Validación real
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Señales concretas de <span className="text-viridian">clientes reales</span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/65">
              Además de mostrar sistemas reales, sumamos señales de confianza concretas de quienes ya trabajaron con Viridian Core.
            </p>
          </div>

          <div className="grid gap-5 lg:col-span-7 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.category}`}
                className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-border/60 bg-card/80 p-6 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-viridian/45 hover:bg-card/90 md:p-7"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:radial-gradient(color-mix(in_oklch,var(--viridian)_18%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viridian/60 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-viridian/35 bg-background/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-viridian">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {testimonial.role}
                    </span>
                    <span className="rounded-full border border-border/70 bg-background/45 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                      Validación real
                    </span>
                  </div>

                  <MessageSquareQuote className="mt-8 h-7 w-7 text-viridian/80" aria-hidden="true" />
                  <blockquote className="mt-5 text-pretty text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>
                </div>

                <div className="relative mt-8 border-t border-border/55 pt-5">
                  <h3 className="text-base font-medium tracking-tight text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/62">
                    {testimonial.category}
                  </p>
                  {testimonial.relatedProject ? (
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/42">
                      Proyecto relacionado: {testimonial.relatedProject}
                    </p>
                  ) : null}
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-viridian/75">
                    {testimonial.source}
                  </p>
                </div>
              </article>
            ))}

            <div className="relative flex min-h-[260px] flex-col justify-between rounded-lg border border-dashed border-border/70 bg-card/35 p-6 md:p-7">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                  Próximas validaciones
                </span>
                <p className="mt-4 text-pretty text-lg font-medium leading-snug text-foreground/80">
                  La estructura queda lista para sumar nuevos comentarios reales, por ejemplo Agüita u otros clientes implementados.
                </p>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-foreground/55">
                Cada testimonio debe mantener el mismo criterio: cliente real, proyecto concreto y texto verificable, sin métricas ni promesas infladas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
