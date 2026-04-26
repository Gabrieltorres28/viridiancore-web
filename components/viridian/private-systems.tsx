import { FileText, Building2, Store, Landmark, Bot, BarChart3, KeyRound, MessageCircle, ShieldCheck, Users, Shield } from "lucide-react"
import { SectionStarfield } from "./section-starfield"

const WHATSAPP_URL =
  "https://wa.me/543751471708?text=Hola%2C%20quiero%20consultar%20por%20un%20sitio%20web%20o%20sistema%20para%20mi%20negocio."

const ITEMS = [
  { label: "Sistema PyME: clientes, ventas, caja y stock", icon: Store },
  { label: "Sistema Gestor Previsional: trámites y jubilaciones", icon: FileText },
  { label: "Sistema municipal: transparencia, reclamos y gestión interna", icon: Landmark },
  { label: "Paneles privados para administradores, reportes.", icon: BarChart3 },
  { label: "Demos controladas sin exponer datos reales", icon: ShieldCheck },
]

export function PrivateSystems() {
  return (
    <section
      id="sistemas-privados"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="approach" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
            / 005 — Productos digitales
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl">
            Sistemas web para operar mejor, vender más y controlar tu negocio
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            Desarrollamos sistemas digitales para PyMEs, comercios, instituciones y municipios: 
            gestión de clientes, caja, stock, trámites, reportes, usuarios y paneles administrativos.
            Son soluciones privadas, adapatables a cada operación y pensadas para reemplazar planillas,
            papeles y procesos desordenados
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-viridian px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-viridian/90 hover:shadow-[0_0_32px_-8px_var(--viridian)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar sistema para mi negocio
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-card">
            {ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border-b border-border/50 px-6 py-5 last:border-b-0 md:px-7"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/60 text-viridian">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80 md:text-base">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
