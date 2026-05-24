import { Check } from "lucide-react"
import { SectionStarfield } from "./section-starfield"

const BULLETS = [
  "Menos planillas sueltas",
  "Datos centralizados",
  "Procesos trazables",
  "Paneles operativos",
]

const WORKFLOW = [
  {
    index: "01",
    title: "Relevamiento",
    description: "Proceso, roles, datos y prioridades",
  },
  {
    index: "02",
    title: "Diseño funcional",
    description: "Pantallas, permisos y modelo de datos",
  },
  {
    index: "03",
    title: "Desarrollo",
    description: "Paneles, automatizaciones e integraciones",
  },
  {
    index: "04",
    title: "Producción",
    description: "Deploy, pruebas y seguimiento",
  },
]

export function Approach() {
  return (
    <section
      id="enfoque"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="approach" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
              / 005 — Enfoque
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              El problema no es el esfuerzo.{" "}
              <span className="text-viridian">Es la falta de sistema.</span>
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
              <p>
                Muchas organizaciones no fallan por falta de trabajo, sino por
                falta de estructura. Operan con planillas dispersas, mensajes
                sueltos y tareas manuales que consumen tiempo y generan
                errores.
              </p>
              <p>
                Viridian Core construye sistemas de gestión, herramientas internas y plataformas digitales para ordenar procesos, centralizar datos y dar seguimiento real al trabajo diario.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-md border border-border/60 bg-card/40 px-4 py-3 text-sm text-foreground/85 md:backdrop-blur-sm"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-viridian/40 bg-viridian/10 text-viridian">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — visual block */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-border/60 bg-card shadow-[0_0_48px_-36px_var(--viridian)]">
              {/* Viridian wash */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_20%,color-mix(in_oklch,var(--viridian)_22%,transparent)_0%,transparent_60%)]"
                aria-hidden="true"
              />
              {/* Hairline grid */}
              <div
                className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--border)_60%,transparent)_1px,transparent_1px)] [background-size:56px_56px] opacity-60"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.22em] text-foreground/55">
                  <span>System / workflow</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-viridian shadow-[0_0_10px_var(--viridian)]" />
                    live
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="space-y-2.5">
                    {WORKFLOW.map((row) => (
                      <div
                        key={row.index}
                        className="grid grid-cols-[2.25rem_1fr] gap-4 rounded-md border border-border/55 bg-background/35 px-4 py-3.5 md:backdrop-blur-sm transition-colors hover:border-viridian/30 hover:bg-background/45"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-viridian">
                          {row.index}
                        </span>
                        <div>
                          <h3 className="text-sm font-medium tracking-tight text-foreground">
                            {row.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-foreground/58 md:text-sm">
                            {row.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border/60 pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                      Output
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/72">
                      Sistemas de gestión, paneles internos y presencia digital profesional listos para uso real.
                    </p>
                    <p className="mt-3 border-l border-viridian/50 pl-3 font-mono text-[11px] uppercase tracking-[0.16em] text-viridian/80">
                      demo disponible bajo consulta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
