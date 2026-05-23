"use client"

import { useEffect, useMemo, useState } from "react"
import { Star, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionStarfield } from "./section-starfield"

type Testimonial = {
  name: string
  company: string
  role: string
  solution: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sara",
    company: "Dos Hermanas Agua",
    role: "Cliente",
    solution: "Sistema de gestión para reparto de agua",
    quote:
      "Estoy muy conforme con el programa que compré y con todo el acompañamiento brindado. ¡Excelente atención!",
  },
  {
    name: "Darien",
    company: "Agüita",
    role: "Cliente",
    solution: "Sistema operativo para reparto y control de envases",
    quote:
      "Arranqué hace dos años. Todos me ofrecían control de stock y punto de venta, pero nadie me podía resolver lo de los envases en comodato. Muy recomendado.",
  },
  {
    name: "Daniel Gómez",
    company: "Blessed Soluciones Integrales",
    role: "Cliente",
    solution: "Presencia digital e infraestructura comercial",
    quote:
      "Viridian Core digitalizó mi empresa y estoy muy conforme con los resultados: correo corporativo, firma digital, una carpeta de presentación en PDF y una web que se adapta perfectamente a las operaciones de Blessed. Lo recomiendo.",
  },
  {
    name: "Eduardo",
    company: "Gestor Previsional",
    role: "Cliente",
    solution: "Sistema para gestión de trámites previsionales",
    quote:
      "Antes lo hacía todo en papel y perdía mucho tiempo. Hoy, con el gestor de trámites previsionales, lo tengo todo en un solo lugar: muy cómodo e intuitivo. Muchísimas gracias.",
  },
]

const AUTOPLAY_MS = 3400
const SWIPE_THRESHOLD = 44

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const active = TESTIMONIALS[activeIndex]
  const total = TESTIMONIALS.length

  const next = useMemo(
    () => () => setActiveIndex((current) => (current + 1) % total),
    [total],
  )

  const previous = () =>
    setActiveIndex((current) => (current - 1 + total) % total)

  useEffect(() => {
    if (paused || total <= 1) return

    const interval = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(interval)
  }, [next, paused, total])

  return (
    <section
      id="validacion"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-32"
    >
      <SectionStarfield variant="services" />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_55%_at_50%_0%,color-mix(in_oklch,var(--viridian)_12%,transparent)_0%,transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            / 003 — Validación de clientes
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Lo que dicen quienes ya trabajan con{" "}
            <span className="text-viridian">Viridian Core</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/65 md:text-lg">
            Además de desarrollar sistemas y plataformas reales, Viridian Core ya cuenta con validaciones concretas de clientes que utilizaron estas soluciones en contextos reales.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStart === null) return
            const distance = touchStart - (event.changedTouches[0]?.clientX ?? touchStart)
            if (Math.abs(distance) >= SWIPE_THRESHOLD) {
              if (distance > 0) next()
              else previous()
            }
            setTouchStart(null)
          }}
        >
          <article className="relative min-h-[390px] overflow-hidden rounded-xl border border-viridian/20 bg-card/85 p-7 shadow-[0_34px_100px_-72px_var(--viridian)] backdrop-blur-md transition-all duration-500 md:min-h-[360px] md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:radial-gradient(color-mix(in_oklch,var(--viridian)_18%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viridian/70 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_100%_0%,color-mix(in_oklch,var(--viridian)_18%,transparent)_0%,transparent_58%)]"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-viridian/35 bg-background/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-viridian backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Cliente verificado
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-viridian/85" aria-label="Valoración positiva">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mt-10 transition-all duration-500" key={activeIndex}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                    {active.solution}
                  </p>
                  <blockquote className="mt-5 text-pretty text-2xl font-medium leading-snug tracking-tight text-foreground md:text-4xl">
                    “{active.quote}”
                  </blockquote>
                </div>
              </div>

              <div className="relative border-t border-border/55 pt-6">
                <p className="text-lg font-medium tracking-tight text-foreground">
                  {active.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/62 md:text-base">
                  {active.company} · {active.role}
                </p>
              </div>
            </div>
          </article>

          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Indicadores de testimonios">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={`${testimonial.name}-${testimonial.company}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian",
                  index === activeIndex
                    ? "w-8 bg-viridian shadow-[0_0_18px_-6px_var(--viridian)]"
                    : "w-2.5 bg-foreground/22 hover:bg-foreground/38",
                )}
                aria-label={`Ver testimonio de ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
