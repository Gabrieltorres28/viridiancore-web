import Link from "next/link"
import { Instagram } from "lucide-react"
import { BrandLogo } from "./brand-logo"

const FOOTER_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#sistemas-privados", label: "Demos privadas" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link
              href="#inicio"
              className="block w-[230px] md:w-[310px]"
              aria-label="Viridian Core — Inicio"
            >
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-foreground/60">
              Sistemas y software para empresas e instituciones.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/50">
              Navegación
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-viridian"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/50">
              Redes
            </span>
            <a
              href="https://www.instagram.com/viridian.core/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Viridian Core"
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/75 transition-colors hover:text-viridian"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/40 text-foreground/70 transition-colors hover:border-viridian/40 hover:text-viridian">
                <Instagram className="h-4 w-4" />
              </span>
              @viridian.core
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
            © {new Date().getFullYear()} Viridian Core — Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
            Web · Sistemas · Gestión
          </p>
        </div>
      </div>
    </footer>
  )
}
