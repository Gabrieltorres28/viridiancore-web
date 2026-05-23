import { ArrowUpRight, MessageCircle } from "lucide-react"
import { HeroVideoBackground } from "./hero-video"

const WHATSAPP_URL =
  "https://wa.me/543751471708?text=Hola%2C%20quiero%20consultar%20por%20un%20sistema%20de%20gesti%C3%B3n%20o%20software%20operativo%20para%20mi%20negocio."

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <HeroVideoBackground
        className="z-0"
        desktopSrc="/videos/videohero-web.mp4"
        mobileSrc="/videos/videoheromobile-web.mp4"
        posterSrc="/images/foto-precargavideo.webp"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/30 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-viridian shadow-[0_0_12px_var(--viridian)]" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/80">
            Software operativo para empresas
          </span>
        </div>

        <h1 className="max-w-4xl text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Sistemas de gestión y software operativo para{" "}
          <span className="text-viridian">negocios reales</span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg">
          En Viridian Core diseñamos sistemas de gestión, herramientas internas y plataformas digitales reales para negocios que necesitan operar mejor, vender con más claridad y tomar decisiones con información.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-viridian px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-viridian/90 hover:shadow-[0_0_32px_-8px_var(--viridian)]"
          >
            Ver proyectos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border/70 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-viridian/50 hover:bg-card/60"
          >
            <MessageCircle className="h-4 w-4 text-viridian" />
            Hablar por WhatsApp
          </a>
        </div>

        <p className="mt-8 max-w-xl text-sm text-foreground/55">
          Software operativo para empresas e instituciones que necesitan ordenar su trabajo, controlar procesos y dejar de depender del cuaderno, Excel o WhatsApp desordenado.
        </p>

        <div className="mt-16 flex items-center gap-6 border-t border-border/40 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 md:mt-24">
          <span>V.CORE / 001</span>
          <span className="h-px flex-1 bg-border/40" />
          <span className="hidden sm:inline">Sistemas · Operación · Gestión</span>
        </div>
      </div>
    </section>
  )
}
