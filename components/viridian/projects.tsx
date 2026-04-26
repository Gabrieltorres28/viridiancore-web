import { ProjectCard, type Project } from "./project-card"
import { SectionStarfield } from "./section-starfield"

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Instituto Superior de Informática",
    type: "Sitio educativo",
    teaser: "Sitio institucional para comunicar información académica y canales de contacto.",
    description:
      "Sitio institucional educativo para presentar información académica, identidad institucional y canales de contacto de forma clara y accesible.",
    tech: "Next.js · Tailwind · institución educativa",
    href: "https://isipp.com.ar",
  },
  {
    index: "02",
    title: "Blessed Soluciones Integrales",
    type: "Sitio corporativo",
    teaser:
      "Presencia comercial profesional para una empresa de soluciones integrales.",
    description:
      "Sitio institucional para empresa de soluciones integrales, con presencia comercial profesional, dominio propio, estructura clara de servicios y base para comunicación corporativa.",
    tech: "Next.js · Tailwind · dominio propio",
    href: "https://blessed.com.ar",
  },
  {
    index: "03",
    title: "Municipalidad de El Alcázar",
    type: "Portal municipal experimental",
    teaser:
      "Base pública para organizar accesos útiles y mejorar la presencia digital municipal.",
    description:
      "Portal municipal experimental orientado a mejorar la presencia digital, organizar accesos útiles y servir como base para futuros módulos de digitalización pública.",
    tech: "Next.js · Tailwind · portal público",
    href: "https://municipalidad-elalcazar.vercel.app",
  },
]

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-border/50 bg-background py-24 md:py-36"
    >
      <SectionStarfield variant="projects" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
              / 002 — Proyectos
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Casos reales de{" "}
              <span className="text-viridian">sitios en producción</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-foreground/65 md:text-base">
            Una selección breve de proyectos públicos. No incluye sistemas
            internos con datos privados ni accesos administrativos.
          </p>
        </div>

        {/* Separator */}
        <div className="mt-12 mb-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
