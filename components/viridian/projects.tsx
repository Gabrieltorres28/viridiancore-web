import { ProjectCard, type Project } from "./project-card"
import { SectionStarfield } from "./section-starfield"

const WHATSAPP_URL =
  "https://wa.me/543751471708?text=Hola%2C%20quiero%20consultar%20por%20un%20sistema%20de%20gesti%C3%B3n%20o%20software%20operativo%20para%20mi%20negocio."

const MANAGEMENT_PROJECTS: Project[] = [
  {
    index: "01",
    title: "Sistema para repartos y distribuidoras",
    category: "system",
    type: "Solución vertical especializada",
    status: "Implementado en cliente real",
    badge: "Sistema vendido",
    description:
      "Sistema operativo real para distribuidoras y repartos, orientado a gestionar clientes, entregas, deudas, stock, movimientos y operaciones diarias desde una herramienta centralizada.",
    image: {
      src: "/images/sistema-reparto.webp",
      alt: "Sistema para repartos y distribuidoras desarrollado por Viridian Core",
    },
    imageFit: "contain",
    features: [
      "Gestión de clientes",
      "Gestión de entregas",
      "Control de deudas",
      "Productos y stock",
      "Movimientos operativos",
      "Exportaciones",
      "Operación diaria",
      "PWA para uso móvil",
    ],
    cta: "Ver solución para repartos",
    href: "https://repartos.viridiancore.com.ar",
  },
  {
    index: "02",
    title: "Sistema operativo para PyME local",
    category: "system",
    type: "Herramienta interna a medida",
    status: "Cliente real",
    badge: "Sistema vendido",
    description:
      "Solución adaptada a un negocio real, orientada a reemplazar cuadernos, WhatsApp desordenado y planillas dispersas por una herramienta centralizada para operar mejor.",
    image: {
      src: "/images/sistema-pyme-imagen.webp",
      alt: "Sistema operativo para PyME local desarrollado por Viridian Core",
    },
    imageFit: "contain",
    features: [
      "Clientes",
      "Operaciones",
      "Historial",
      "Control de saldos",
      "Reportes básicos",
      "Uso desde celular",
      "Uso desde computadora",
      "Datos centralizados",
    ],
    cta: "Quiero ordenar mi negocio",
    href: WHATSAPP_URL,
  },
]

const INSTITUTIONAL_PROJECTS: Project[] = [
  {
    index: "03",
    title: "Blessed Soluciones Integrales",
    category: "institutional",
    type: "Presencia digital empresarial",
    status: "Publicado",
    badge: "Proyecto publicado",
    description:
      "Sitio institucional profesional para empresa de servicios industriales, pensado para mejorar presentación comercial, confianza y presencia online.",
    image: {
      src: "/images/logo-blessed.webp",
      alt: "Logo de Blessed Soluciones Integrales",
    },
    imageFit: "contain",
    features: [
      "Landing corporativa",
      "Dominio profesional",
      "Correo corporativo",
      "Identidad visual aplicada",
      "Servicios claros",
    ],
    cta: "Ver caso",
    href: "https://blessed.com.ar",
  },
  {
    index: "04",
    title: "ISIPP",
    category: "institutional",
    type: "Sitio institucional",
    status: "Publicado",
    badge: "Institucional",
    description:
      "Web institucional para entidad educativa, desarrollada para ordenar información pública, mejorar presencia digital y comunicar de forma profesional.",
    image: {
      src: "/images/logo-isipp.webp",
      alt: "Logo de ISIPP",
    },
    imageFit: "contain",
    features: [
      "Estructura institucional",
      "Páginas informativas",
      "Navegación clara",
      "Diseño responsive",
      "Publicación online",
    ],
    cta: "Ver sitio",
    href: "https://isipp.com.ar",
  },
  {
    index: "05",
    title: "Municipalidad de El Alcázar",
    category: "institutional",
    type: "Portal institucional municipal",
    status: "Validación municipal",
    badge: "Publicado",
    description:
      "Portal institucional orientado a comunicación pública, presencia digital territorial y validación de soluciones digitales para municipios.",
    image: {
      src: "/images/logoalcazar.webp",
      alt: "Logo de la Municipalidad de El Alcázar",
    },
    imageFit: "contain",
    features: [
      "Diseño institucional",
      "Información pública",
      "Estructura responsive",
      "Base para módulos digitales",
      "Publicación online",
    ],
    cta: "Ver portal",
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
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian">
              / 002 — Sistemas reales implementados
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Software real para <span className="text-viridian">operaciones reales</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-foreground/65 md:text-base">
            No trabajamos sobre ideas abstractas. Ya desarrollamos sistemas de gestión para PyMEs, sistemas para repartos, plataformas institucionales y soluciones digitales para empresas, instituciones y municipios.
          </p>
        </div>

        <div className="mt-12 mb-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-viridian/90">
              Sistemas operativos / software de gestión
            </span>
            <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Herramientas internas que ordenan el trabajo diario.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/58">
            Foco principal: software operativo, automatización y sistemas de gestión para negocios que necesitan dejar de depender del cuaderno, Excel o WhatsApp desordenado.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {MANAGEMENT_PROJECTS.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        <div className="mt-20 rounded-lg border border-border/60 bg-card/35 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                Validación institucional y comercial
              </span>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                También desarrollamos presencia digital profesional para empresas e instituciones.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-foreground/60">
              Estos proyectos demuestran publicación real, criterio visual, estructura responsive y capacidad para acompañar empresas, instituciones educativas y municipios sin convertir la web en el centro del servicio.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {INSTITUTIONAL_PROJECTS.map((project) => (
              <ProjectCard key={project.index} project={project} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
