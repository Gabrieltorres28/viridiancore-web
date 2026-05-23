import { ArrowUpRight, Check, Cpu, Globe2, MessageCircle, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionStarfield } from "./section-starfield"

const WHATSAPP_NUMBER = "543751471708"

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

type Package = {
  name: string
  badge: string
  description: string
  price: string
  features: string[]
  cta: string
  message: string
  highlighted?: boolean
  icon: LucideIcon
}

const PACKAGES: Package[] = [
  {
    name: "Presencia Digital Profesional",
    badge: "Base digital",
    description:
      "Una solución para empresas que necesitan una presencia online profesional, correo corporativo y materiales digitales consistentes para vender y presentarse mejor.",
    price: "Desde $200.000 ARS",
    features: [
      "Sitio institucional o landing profesional",
      "Diseño responsive",
      "Dominio y configuración técnica",
      "Correo corporativo",
      "Firma digital",
      "Presentación comercial básica",
      "Optimización visual para marca",
    ],
    cta: "Profesionalizar mi empresa",
    message: "Hola, quiero consultar por el paquete Presencia Digital Profesional.",
    icon: Globe2,
  },
  {
    name: "Sistema Operativo PyME",
    badge: "Más recomendado",
    description:
      "Sistema de gestión desarrollado para negocios que necesitan dejar de depender de cuadernos, Excel o WhatsApp desordenado y centralizar su operación diaria.",
    price: "Desde $380.000 ARS + soporte mensual",
    features: [
      "Gestión de clientes",
      "Productos o servicios",
      "Operaciones diarias",
      "Stock o movimientos",
      "Deudas y saldos",
      "Reportes básicos",
      "Exportación de datos",
      "Acceso desde celular y computadora",
      "PWA instalable si corresponde",
    ],
    cta: "Consultar sistema para mi negocio",
    message: "Hola, quiero consultar por el paquete Sistema Operativo PyME.",
    highlighted: true,
    icon: Cpu,
  },
  {
    name: "Solución Core a Medida",
    badge: "A medida",
    description:
      "Desarrollo de software personalizado para operaciones más complejas: sistemas internos, plataformas institucionales, módulos administrativos, paneles de control y automatización de procesos.",
    price: "Desde $700.000 ARS",
    features: [
      "Diagnóstico del proceso",
      "Diseño de arquitectura",
      "Módulos personalizados",
      "Roles y permisos",
      "Paneles administrativos",
      "Reportes avanzados",
      "Automatización",
      "Iteraciones y soporte",
      "Escalabilidad según necesidad",
    ],
    cta: "Hablar sobre una solución a medida",
    message: "Hola, quiero consultar por el paquete Solución Core a Medida.",
    icon: Network,
  },
]

export function PrivateSystems() {
  return (
    <section
      id="sistemas-privados"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="approach" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            / 006 — Paquetes comerciales
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl">
            Paquetes para <span className="text-viridian">digitalizar tu operación</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            Desde presencia digital profesional hasta sistemas de gestión a medida, Viridian Core construye soluciones pensadas para ordenar procesos, mejorar la operación y dar una imagen más sólida frente a clientes e instituciones.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((pack) => {
            const Icon = pack.icon
            return (
              <article
                key={pack.name}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/80 p-6 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 md:p-7",
                  pack.highlighted
                    ? "border-viridian/45 shadow-[0_34px_100px_-72px_var(--viridian)] lg:scale-[1.03]"
                    : "border-border/60 hover:border-viridian/35",
                )}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(color-mix(in_oklch,var(--viridian)_18%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
                  aria-hidden="true"
                />
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                    pack.highlighted ? "via-viridian/80" : "via-border/80",
                  )}
                  aria-hidden="true"
                />
                {pack.highlighted ? (
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,color-mix(in_oklch,var(--viridian)_18%,transparent)_0%,transparent_62%)]"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
                        pack.highlighted
                          ? "border-viridian/45 bg-viridian/10 text-viridian"
                          : "border-border/70 bg-background/45 text-foreground/62",
                      )}
                    >
                      {pack.badge}
                    </span>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/55 text-viridian transition-colors group-hover:border-viridian/45">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-medium leading-tight tracking-tight text-foreground">
                    {pack.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/66 md:text-base">
                    {pack.description}
                  </p>

                  <p className="mt-6 border-y border-border/55 py-4 text-xl font-medium tracking-tight text-foreground">
                    {pack.price}
                  </p>

                  <ul className="mt-6 grid gap-3">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-snug text-foreground/76">
                        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-viridian/35 bg-viridian/10 text-viridian">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-1 items-end">
                    <a
                      href={whatsappUrl(pack.message)}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "group/cta inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian",
                        pack.highlighted
                          ? "bg-viridian text-primary-foreground hover:bg-viridian/90 hover:shadow-[0_0_28px_-8px_var(--viridian)]"
                          : "border border-border/70 bg-background/45 text-foreground hover:border-viridian/45 hover:text-viridian",
                      )}
                    >
                      <MessageCircle className="h-4 w-4" />
                      {pack.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
