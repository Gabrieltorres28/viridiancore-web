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
    title: "Sitios institucionales",
    description:
      "Presencia digital seria para empresas, instituciones y organismos. Estructura clara, contenido ordenado y estética alineada con la marca.",
    icon: Building2,
  },
  {
    index: "02",
    title: "Sistemas a medida",
    description:
      "Sistemas de gestión para procesos internos: clientes, trámites, caja, stock, permisos, reportes y paneles administrativos.",
    icon: Cpu,
  },
  {
    index: "03",
    title: "Digitalización de procesos",
    description:
      "Pasamos tareas manuales a flujos digitales: formularios, registros, integraciones, notificaciones e historial de operaciones.",
    icon: Workflow,
  },
  {
    index: "04",
    title: "Producción y despliegue",
    description:
      "Dominio, despliegue en Vercel, bases de datos, correo corporativo y configuración técnica para publicar con una base estable.",
    icon: Network,
  },
]

export function Services() {
  return (
    <section
      id="que-hacemos"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="services" />

      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0 grid-backdrop opacity-50"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            / 003 — Qué hacemos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Servicios concretos para publicar y operar.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/65">
            Trabajamos sobre necesidades frecuentes de PyMEs, instituciones y
            municipios: presencia web, sistemas internos y procesos digitales.
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
                {/* top viridian accent bar */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-viridian transition-all duration-500 group-hover:w-full"
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
