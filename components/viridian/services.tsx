import { Building2, Cpu, Workflow, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionStarfield } from "./section-starfield"

type Service = {
  index: string
  title: string
  description: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Sistemas de gestión",
    description:
      "Software operativo para clientes, ventas, caja, stock, deudas, repartos, permisos, reportes y paneles administrativos.",
    icon: Cpu,
  },
  {
    index: "02",
    title: "Automatización operativa",
    description:
      "Pasamos tareas manuales a flujos digitales: formularios, registros, integraciones, notificaciones e historial de operaciones.",
    icon: Workflow,
  },
  {
    index: "03",
    title: "Plataformas para instituciones",
    description:
      "Herramientas internas y portales para organizar información, trámites, comunicación pública y procesos administrativos.",
    icon: Network,
  },
  {
    index: "04",
    title: "Presencia digital profesional",
    description:
      "Sitios institucionales y landing corporativas cuando el negocio necesita presentar servicios, validar confianza y publicar información clara.",
    icon: Building2,
  },
]

export function Services() {
  return (
    <section
      id="que-hacemos"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="services" />

      <div
        className="pointer-events-none absolute inset-0 z-0 grid-backdrop opacity-50"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            / 004 — Qué hacemos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Sistemas reales para ordenar operaciones, datos y decisiones.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/65">
            Trabajamos con PyMEs, instituciones y municipios que necesitan sistemas de gestión, software operativo, automatización y soluciones digitales para empresas con uso real.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.index}
                className="group relative flex flex-col justify-between gap-10 bg-card p-8 transition-colors duration-500 hover:bg-card/70 md:p-10"
              >
                <span
                  className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-viridian transition-[width] duration-500 group-hover:w-full"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/70 bg-background/60 text-viridian transition-colors duration-500 group-hover:border-viridian/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                    {service.index}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-foreground/65 md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
